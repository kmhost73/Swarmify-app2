import React, { useState } from 'react';

// --- ICONS (using inline SVGs to avoid external dependencies) ---
const WandIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.21 1.21 0 0 0 1.72 0L21.64 5.36a1.21 1.21 0 0 0 0-1.72Z" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M17 18h-4" /></svg>);
const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 1.9-.6.5-1.4.8-2.2.8-.8 0-1.5-.3-2.1-.7-.6-.5-1-1.2-1.2-2.1-.2-.8.3-1.8.9-2.6.6-.8 1.4-1.4 2.3-1.8s1.8-.8 2.5-.8c.7 0 1.3.3 1.8.7.5.4.9 1.1.9 1.8s-.4 1.4-.9 1.8c-.5.4-1.1.7-1.8.7H18c-4.4 0-8-3.6-8-8V5h2v5c0 3.3 2.7 6 6 6h.1c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2s-.2-.9-.5-1.2c-.3-.3-.7-.5-1.2-.5h-.1c-1.1 0-2.1-.4-2.8-1.2-.8-.7-1.2-1.7-1.2-2.8V5h2v1.5c0 .7.2 1.3.7 1.8.5.5 1.1.7 1.8.7h.1c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1.1-.7-1.8-.7H16V4h6z"/></svg>);
const CopyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>);
const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="20 6 9 17 4 12"/></svg>);
const LightbulbIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7.5a4.5 4.5 0 0 0-9 0c0 1.5.3 2.7 1.5 3.9.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>);
const LinkIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>);
const UploadIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>);
const FileVideoIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 mb-3"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 15.5 4 2.5-4 2.5v-5z"/><rect width="8" height="6" x="8" y="14" rx="1"/></svg>);
const VideoIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>);
const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const NewspaperIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"/><path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3v18"/></svg>);

export default function App() {
    const [activeTab, setActiveTab] = useState('topic');
    const [topic, setTopic] = useState('Build highly effective relationships');
    const [url, setUrl] = useState('https://youtu.be/3sLP2bcD5Xg');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState(null);
    const [contentPackage, setContentPackage] = useState(null);
    const [copyStates, setCopyStates] = useState({});

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) return;
        if (selectedFile.size > 10 * 1024 * 1024) {
            setError("File is too large. Please select a video under 10MB.");
            return;
        }
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const generateImage = async (prompt) => {
        try {
            const payload = { instances: { prompt: `Create a visually striking and abstract thumbnail image representing the concept: "${prompt}". Use bold colors and dynamic shapes.` }, parameters: { "sampleCount": 1 } };
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) return null;
            const result = await response.json();
            if (result.predictions && result.predictions[0]?.bytesBase64Encoded) {
                return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
            }
        } catch (e) { console.error("Image generation failed:", e); }
        return null;
    };
    
    const handleGenerate = async () => {
        setIsLoading(true);
        setLoadingMessage('Analyzing content...');
        setError(null);
        setContentPackage(null);
        let prompt = '';
        let payloadData = null;

        const simulatedTranscript = `The core idea in Alex Hormozi's '$100M Leads' is that getting more customers comes down to four variables: having a great lead magnet, a compelling core offer, a lead generation strategy, and a sales conversion mechanism. For lead magnets, the key is to create something so valuable people would pay for it, and then give it away for free. This builds trust and reciprocity. For lead generation, you can use warm outreach to people you know, post valuable content consistently on social media, or run paid ads. The most important thing is to pick one method and master it. Don't try to do everything at once. For your core offer, you need a 'Grand Slam Offer' that is so good, people feel stupid saying no. This involves stacking value, providing guarantees, and using scarcity and urgency. Finally, you need a way to convert these leads into paying customers, which is the sales skill. Mastering these four drivers is the key to predictable business growth.`;

        try {
            switch (activeTab) {
                case 'topic':
                    if (!topic.trim()) throw new Error("Please enter a topic.");
                    prompt = `You are an expert content strategist. Your task is to generate a complete social media package based on the topic: "${topic}".`;
                    break;
                case 'url':
                    if (!url.trim()) throw new Error("Please enter a URL.");
                    prompt = `You are an expert content strategist. A user has provided a video about Alex Hormozi's lead generation strategies, and here is the transcript: "${simulatedTranscript}". Generate a complete social media package summarizing its key points.`;
                    break;
                case 'upload':
                    if (!file) throw new Error("Please upload a file.");
                    payloadData = { mimeType: file.type, data: await toBase64(file) };
                    prompt = `You are an expert content strategist. Analyze this video and generate a complete social media package summarizing its key points.`;
                    break;
                default:
                    throw new Error("Invalid input type.");
            }
            
            const parts = [{ text: prompt }];
            if (payloadData) parts.push({ inlineData: payloadData });

            const payload = {
                contents: [{ role: "user", parts }],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "OBJECT", properties: {
                            "video_clips": { "type": "ARRAY", "items": { "type": "OBJECT", "properties": { "title": { "type": "STRING" }, "hook": { "type": "STRING" }, "cta": { "type": "STRING" } } } },
                            "linkedin_carousel_slides": { "type": "ARRAY", "items": { "type": "OBJECT", "properties": { "slide_text": { "type": "STRING" } } } },
                            "twitter_thread": { "type": "ARRAY", "items": { "type": "OBJECT", "properties": { "tweet_text": { "type": "STRING" } } } },
                            "blog_post": { "type": "OBJECT", "properties": { "title": { "type": "STRING" }, "body": { "type": "STRING" } } }
                        },
                    }
                }
            };
            
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content) {
                const text = result.candidates[0].content.parts[0].text;
                let parsedJson = JSON.parse(text);

                setLoadingMessage('Generating thumbnails...');
                const videoClips = Array.isArray(parsedJson.video_clips) ? parsedJson.video_clips : [];
                const imagePromises = videoClips.map(clip => generateImage(clip.title));
                const imageUrls = await Promise.all(imagePromises);
                
                parsedJson.video_clips = videoClips.map((clip, index) => ({ ...clip, thumbnailUrl: imageUrls[index] }));
                setContentPackage(parsedJson);
            } else {
                throw new Error("The AI returned an invalid response structure.");
            }
        } catch (err) {
            console.error("Error during AI generation:", err);
            setError(err.message || "An unknown error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopyToClipboard = (text, key) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopyStates(prev => ({ ...prev, [key]: 'Copied!' }));
            setTimeout(() => setCopyStates(prev => ({ ...prev, [key]: null })), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setError('Could not copy to clipboard.');
        }
        document.body.removeChild(textArea);
    };
    
    const Tab = ({ id, title, icon }) => (
        <div onClick={() => setActiveTab(id)} className={`flex items-center cursor-pointer py-2 px-4 border-b-2 transition-all duration-200 ${activeTab === id ? 'text-indigo-400 border-indigo-400' : 'text-slate-400 border-transparent hover:text-white'}`}>
            {icon} {title}
        </div>
    );

    return (
        <div className="bg-[#111827] min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-[#1F2937] rounded-2xl shadow-2xl p-8">
                    <h1 className="text-3xl font-bold text-white text-center mb-6">Swarmify <span className="text-indigo-400 text-sm font-medium align-top">App</span></h1>
                    
                    <div className="flex border-b border-gray-700 mb-4">
                        <Tab id="topic" title="Topic" icon={<LightbulbIcon />} />
                        <Tab id="url" title="URL" icon={<LinkIcon />} />
                        <Tab id="upload" title="Upload" icon={<UploadIcon />} />
                    </div>

                    <div className="mb-6">
                        {activeTab === 'topic' && ( <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} className="bg-[#374151] border border-[#4B5563] w-full rounded-lg py-3 px-4 text-white" placeholder="Enter a topic..." /> )}
                        {activeTab === 'url' && ( <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="bg-[#374151] border border-[#4B5563] w-full rounded-lg py-3 px-4 text-white" placeholder="https://youtube.com/..." /> )}
                        {activeTab === 'upload' && (
                            <>
                                <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept="video/*" />
                                <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-700/50 hover:border-indigo-500 transition">
                                    <FileVideoIcon />
                                    <p className={`text-sm ${fileName ? 'text-indigo-400' : 'text-slate-400'}`}>{fileName || 'Click to upload a video'}</p>
                                    <p className="text-xs text-slate-500">Max 10MB</p>
                                </label>
                            </>
                        )}
                    </div>

                    <button onClick={handleGenerate} disabled={isLoading} className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-105 disabled:bg-slate-500 disabled:scale-100 disabled:cursor-not-allowed">
                        {isLoading ? (<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>) : (<WandIcon />)}
                        <span className="ml-2">{isLoading ? loadingMessage : 'Generate Content Package'}</span>
                    </button>

                    <div className="mt-6 min-h-[200px]">
                        {error && (<div className="bg-red-800/50 border border-red-600 text-red-200 rounded-lg p-4 text-center"><p className="font-semibold">An Error Occurred</p><p className="text-sm">{error}</p></div>)}
                        
                        {contentPackage && !isLoading && (
                            <div className="space-y-8">
                                {contentPackage.video_clips && contentPackage.video_clips.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center"><VideoIcon className="mr-3 text-indigo-400"/>Viral Video Clips</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {contentPackage.video_clips.map((clip, index) => (
                                                <div key={index} className="bg-[#374151] rounded-lg p-4 flex flex-col">
                                                    <div className="aspect-video bg-black rounded-md flex items-center justify-center mb-3">
                                                        {clip.thumbnailUrl ? <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover rounded-md"/> : <VideoIcon className="text-5xl text-slate-600"/>}
                                                    </div>
                                                    <h4 className="font-semibold text-white truncate">{clip.title}</h4>
                                                    <p className="text-sm text-slate-300 mt-1 flex-grow">"{clip.hook}"</p>
                                                    <p className="text-xs text-indigo-300 mt-2">CTA: {clip.cta}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {contentPackage.linkedin_carousel_slides && contentPackage.linkedin_carousel_slides.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center"><LinkedinIcon className="mr-3 text-indigo-400"/>LinkedIn Carousel</h3>
                                        <div className="flex space-x-4 overflow-x-auto pb-4">
                                            {contentPackage.linkedin_carousel_slides.map((slide, index) => (
                                                <div key={index} className="flex-shrink-0 w-64 h-64 bg-[#374151] rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-lg">
                                                    <p className="text-slate-200 text-lg">"{slide.slide_text}"</p>
                                                    <p className="text-xs text-slate-500 mt-auto">Slide {index + 1} of {contentPackage.linkedin_carousel_slides.length}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {contentPackage.twitter_thread && contentPackage.twitter_thread.length > 0 && (
                                    <div>
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold text-white flex items-center"><TwitterIcon className="mr-3"/>X (Twitter) Thread</h3>
                                            <button onClick={() => handleCopyToClipboard(contentPackage.twitter_thread.map(t => t.tweet_text).join('\n\n'), 'twitter')} className="bg-slate-600 hover:bg-slate-700 text-white text-xs font-semibold py-1 px-3 rounded-full transition flex items-center">
                                                {copyStates.twitter ? <CheckIcon /> : <CopyIcon />} {copyStates.twitter || 'Copy'}
                                            </button>
                                        </div>
                                        <div className="bg-[#374151] rounded-lg p-4 space-y-4">
                                            {contentPackage.twitter_thread.map((tweet, index) => (
                                                <p key={index} className="text-slate-200">{tweet.tweet_text}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {contentPackage.blog_post && (
                                    <div>
                                         <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold text-white flex items-center"><NewspaperIcon className="mr-3 text-indigo-400"/>Blog Post</h3>
                                            <button onClick={() => handleCopyToClipboard(`${contentPackage.blog_post.title}\n\n${contentPackage.blog_post.body}`, 'blog')} className="bg-slate-600 hover:bg-slate-700 text-white text-xs font-semibold py-1 px-3 rounded-full transition flex items-center">
                                                {copyStates.blog ? <CheckIcon /> : <CopyIcon />} {copyStates.blog || 'Copy'}
                                            </button>
                                        </div>
                                        <div className="bg-[#374151] rounded-lg p-4">
                                            <h4 className="text-lg font-bold text-white mb-2">{contentPackage.blog_post.title}</h4>
                                            <p className="text-slate-300 whitespace-pre-wrap">${contentPackage.blog_post.body}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
