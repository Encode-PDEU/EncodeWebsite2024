import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Trash2, Calendar, MapPin, Plus } from "lucide-react"
import { DBService } from "../../services/appwrite.config"

const initialNewEvent = {
  title: "",
  date: String(new Date().getTime()),
  status: "upcoming",
  description: "",
  moreInfo: "",
  details: "",
  imgUrl: "",
  registrationLink: "",
  type: "",
}

export default function Event() {
  const [events, setEvents] = useState([])
  const [editingEvent, setEditingEvent] = useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newEvent, setNewEvent] = useState(initialNewEvent)
  const [selectedFile, setSelectedFile] = useState(null);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "ongoing":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const handleEdit = (event) => {
    setEditingEvent({ ...event })
    setIsEditDialogOpen(true)
  }

  const handleAddEvent = () => {
    setNewEvent(initialNewEvent)
    setIsAddDialogOpen(true)
  }

  const handleUpdateEvent = async () => {
    if (!editingEvent) return

    try {
      // TODO: Replace with actual API call
      console.log("Updating event in database:", editingEvent)

      // Update local state
      setEvents(events.map((event) => (event.$id === editingEvent.$id ? editingEvent : event)))

      setIsEditDialogOpen(false)
      setEditingEvent(null)
    } catch (error) {
      console.error("Failed to update event:", error)
    }
  }

  const handleCreateEvent = async () => {
    try {
      let fileUrl = "";
  
      if (selectedFile) {
        const uploadedFile = await DBService.uploadFile(selectedFile);
  
        fileUrl = `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${import.meta.env.VITE_APPWRITE_BUCKETID}/files/${uploadedFile.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECTID}`;
      }
  
      const eventToCreate = {
        ...newEvent,
        imgUrl: fileUrl || newEvent.imgUrl,
      };
  
      const createdEvent = await DBService.createEvent(eventToCreate)
      
      const mergedEvent = {...eventToCreate, ...createdEvent}

      setEvents([...events, mergedEvent]);
      setIsAddDialogOpen(false);
      setNewEvent(initialNewEvent);
      setSelectedFile(null);
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      // TODO: Replace with actual API call
      console.log("Deleting event from database:", eventId)

      // Update local state
      setEvents(events.filter((event) => event.$id !== eventId))
    } catch (error) {
      console.error("Failed to delete event:", error)
    }
  }

  const handleInputChange = (field, value) => {
    if (!editingEvent) return
    setEditingEvent({
      ...editingEvent,
      [field]: value,
    })
  }

  const handleNewEventInputChange = (field, value) => {
    setNewEvent({
      ...newEvent,
      [field]: value,
    })
  }

  useEffect(() => {
    DBService.getAllEvents().then((e) => setEvents(e))
  }, [])

  return (
    <div className="flex-1 dark text-white md:px-32 px-12 py-10 pt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Events</h2>
        <Button onClick={handleAddEvent} className="flex items-center gap-2 text-xs px-3">
          <Plus className="h-4 w-4" />
          Add New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0 place-items-center gap-y-14 py-10">
        {events.map((event) => (
          <Card key={event?.$id} className="shadow-md rounded-xl w-[320px] min-h-[530px] border-1 border-white/20">
            <CardContent className="p-0 flex flex-col">
              {/* Image */}
              <div className="relative flex justify-center items-center">
                <img
                  src={event?.imgUrl || "/placeholder.svg"}
                  alt={event?.title}
                  className="w-52 h-[294.14px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{event?.title}</h3>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(Number(event?.date))}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event?.type}
                    </div>
                  </div>

                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${getStatusColor(
                      event?.status
                    )}`}
                  >
                    {event?.status.charAt(0).toUpperCase() + event?.status.slice(1)}
                  </span>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {event?.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(event)}
                      className="flex items-center gap-1 text-xs px-2"
                    >
                      <Edit className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteEvent(event?.$id)}
                      className="flex items-center gap-1 text-xs px-2 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>

                  {event?.registrationLink && (
                    <Button size="sm" className="text-xs px-3" asChild>
                      <a href={event?.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="dark text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
          </DialogHeader>

          {editingEvent && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={editingEvent.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Input
                    id="type"
                    value={editingEvent.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={new Date(Number(editingEvent.date)).toISOString().split("T")[0]}
                    onChange={(e) => handleInputChange("date", String(new Date(e.target.value).getTime()))}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={editingEvent.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingEvent.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="moreInfo">More Info</Label>
                <Textarea
                  id="moreInfo"
                  value={editingEvent.moreInfo}
                  onChange={(e) => handleInputChange("moreInfo", e.target.value)}
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="details">Details</Label>
                <Textarea
                  id="details"
                  value={editingEvent.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="imgUrl">Image URL</Label>
                  <Input
                    id="imgUrl"
                    value={editingEvent.imgUrl}
                    onChange={(e) => handleInputChange("imgUrl", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="registrationLink">Registration Link</Label>
                  <Input
                    id="registrationLink"
                    value={editingEvent.registrationLink}
                    onChange={(e) => handleInputChange("registrationLink", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateEvent}>Update Event</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* New Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto dark text-white">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-title">Title</Label>
                <Input
                  id="new-title"
                  value={newEvent.title}
                  onChange={(e) => handleNewEventInputChange("title", e.target.value)}
                  placeholder="Enter event title"
                />
              </div>
              <div>
                <Label htmlFor="new-type">Type</Label>
                <Input
                  id="new-type"
                  value={newEvent.type}
                  onChange={(e) => handleNewEventInputChange("type", e.target.value)}
                  placeholder="e.g., conference, workshop"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-date">Date</Label>
                <Input
                  id="new-date"
                  type="date"
                  value={new Date(Number(newEvent.date)).toISOString().split("T")[0]}
                  onChange={(e) => handleNewEventInputChange("date", String(new Date(e.target.value).getTime()))}
                />
              </div>
              <div>
                <Label htmlFor="new-status">Status</Label>
                <Select value={newEvent.status} onValueChange={(value) => handleNewEventInputChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={newEvent.description}
                onChange={(e) => handleNewEventInputChange("description", e.target.value)}
                placeholder="Enter event description"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="new-moreInfo">More Info</Label>
              <Textarea
                id="new-moreInfo"
                value={newEvent.moreInfo}
                onChange={(e) => handleNewEventInputChange("moreInfo", e.target.value)}
                placeholder="Additional information about the event"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="new-details">Details</Label>
              <Textarea
                id="new-details"
                value={newEvent.details}
                onChange={(e) => handleNewEventInputChange("details", e.target.value)}
                placeholder="Detailed event information"
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="new-imgUrl">Image URL</Label>
                <Input
                  id="new-imgUrl"
                  value={newEvent.imgUrl}
                  onChange={(e) => handleNewEventInputChange("imgUrl", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <Label htmlFor="new-registrationLink">Registration Link</Label>
                <Input
                  id="new-registrationLink"
                  value={newEvent.registrationLink}
                  onChange={(e) => handleNewEventInputChange("registrationLink", e.target.value)}
                  placeholder="https://example.com/register"
                />
              </div>
              <div>
                <Label htmlFor="new-imgFile">Upload Image</Label>
                <Input
                  id="new-imgFile"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </div>

            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEvent}>Create Event</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  )
}