import React, { useState } from 'react'

const ContactFrom = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const result = await response.json();

            if (result.success) {
                setStatus(`> message from ${name} sent successfully`);
                setName('');
                setEmail('');
                setMessage('');
            }
            else {
                setStatus("> failed to send message ❌");
            }
        } catch (error) {
            setStatus("> error connecting to server ❌");
        }

        setLoading(false);

        // Clear form after a delay
        setTimeout(() => {
            setStatus('');
        }, 3000);
    };
    return (
        /* Terminal-style window */
        <div className="w-full border-2 border-green-400/50 bg-gray-900/50 shadow-lg shadow-green-500/10">

            {/* Terminal header */}
            <div className="bg-gray-800/80 px-4 py-2 flex items-center justify-between border-b-2 border-green-400/50">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-gray-400">/users/encode/contact</p>
                <div className="hidden md:block w-12"></div>
            </div>

            {/* Terminal body */}
            <div className="p-4 sm:p-6">

                <form onSubmit={handleSubmit} className="space-y-6 text-lg">
                    {/* Name Input */}
                    <div>
                        <input type="hidden" name="access_key" value="6415a99a-2903-43cc-a1bb-0dec79f35894"></input>
                        {/* <input type="hidden" name="access_key" value="3a0948e9-645e-4806-9352-8332e6e51f74"></input> */}
                        <label htmlFor="name" className="block mb-2 text-green-500">
                            $ enter your_name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black border-2 border-green-400/50 focus:border-green-400 focus:ring-0 p-2 text-white outline-none caret-green-400"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-green-500">
                            $ enter your_email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border-2 border-green-400/50 focus:border-green-400 focus:ring-0 p-2 text-white outline-none caret-green-400"
                            required
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label htmlFor="message" className="block mb-2 text-green-500">
                            $ enter your_message:
                        </label>
                        <textarea
                            name='message'
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-40 bg-black border-2 border-green-400/50 focus:border-green-400 focus:ring-0 p-2 text-white outline-none caret-green-400"
                            required
                        ></textarea>
                    </div>

                    {/* <!-- Honeypot Spam Protection --> */}
                    <input type="checkbox" name="botcheck" class="hidden" style={{ display: "none;" }} />

                    {/* Submit Button */}
                    <div className='flex items-end gap-3'>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-green-500 text-black font-bold hover:bg-white hover:text-black border-2 border-slate-200 hover:border-green-500 transition-all duration-30"
                        >
                            {loading ? './sending...' : './send_message'}
                        </button>
                    </div>
                </form>

                {/* Status message */}
                {status && (
                    <div className="mt-6 text-lg">
                        <p className='text-green-500'>{status}<span className="animate-ping">_</span></p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ContactFrom
