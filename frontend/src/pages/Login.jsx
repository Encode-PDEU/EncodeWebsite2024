import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { isAuthenticated, encryptAuthData } from '../lib/auth.js'

const Login = () => {

  const navigate = useNavigate()

  useEffect(() => {
    console.log(isAuthenticated())
    if(isAuthenticated()){
      navigate("/dashboard/event")
    }
  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const validEmail = import.meta.env.VITE_DASHBOARD_EMAIL;
    const validPassword = import.meta.env.VITE_DASHBOARD_PASSWORD;

    if (email === validEmail && password === validPassword) {
      const expiryToken = new Date().getTime() + 10 * 60 * 1000;
      const authData = {
        email,
        password,
        expiryToken,
        status: true,
      };

      const encrypted = encryptAuthData(authData);
      localStorage.setItem("auth", encrypted);

      navigate("/dashboard/event")
    } else {
      setError("Invalid email or password. Please try again.")
      setIsLoading(false)
    }
  }

  return (

    <div className='relative sm:min-h-[70vh] min-h-screen w-full pt-[72px] flex'>
      <div className='flex-1 flex justify-center items-center'>
      
        <div className="dark to-muted/20 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              {/* <div className="mx-auto w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div> */}
              <h1 className="text-3xl font-bold text-white">Encode Dashboard</h1>
            </div>

            {/* Login Card */}
            <Card className="bshadow-2xl backdrop-blur-sm md:w-[400px] w-[350px] border-3 border-success/60">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl font-semibold">Log in</CardTitle>
                <CardDescription>Enter your credentials to access  dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <Alert variant="destructive" className="animate-in slide-in-from-top-1">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Login Button */}
                  <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">Secure login powered by modern authentication</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login