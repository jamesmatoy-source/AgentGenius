import React, { useState } from 'react';
import { BlogPostType } from './Blog';
import { Save, Upload, ArrowLeft, Plus, Image as ImageIcon } from 'lucide-react';

interface CmsDashboardProps {
  onSave: (post: BlogPostType) => void;
  onCancel: () => void;
}

const CmsDashboard: React.FC<CmsDashboardProps> = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<BlogPostType>>({
    title: '',
    slug: '',
    category: 'Uncategorized',
    author: 'James David Matoy',
    excerpt: '',
    content: '',
    seoTitle: '',
    seoDescription: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    comments: 'No Comments',
    image: '',
    fileName: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      setFormData(prev => ({
        ...prev,
        image: objectUrl,
        fileName: file.name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
        alert("Title and Content are required");
        return;
    }

    const newPost: BlogPostType = {
        id: Date.now(),
        title: formData.title!,
        slug: formData.slug || formData.title!.toLowerCase().replace(/\s+/g, '-'),
        category: formData.category!,
        author: formData.author!,
        excerpt: formData.excerpt || formData.content!.substring(0, 150) + '...',
        content: formData.content!,
        date: formData.date!,
        comments: formData.comments!,
        image: formData.image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
        seoTitle: formData.seoTitle,
        seoDescription: formData.seoDescription,
        fileName: formData.fileName
    };

    onSave(newPost);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-100 text-black">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
                <button onClick={onCancel} className="p-2 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h1 className="text-3xl font-black uppercase tracking-tight">Agent Genius CMS</h1>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-enterprise-purple text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-enterprise-darkPurple transition-colors shadow-lg"
                >
                    <Save className="w-4 h-4" /> Publish Post
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* General Info Card */}
                <div className="bg-white p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-4">
                        General Information
                    </h2>
                    
                    <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Post Title</label>
                        <input 
                            type="text" 
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter the main headline..."
                            className="w-full p-4 border border-gray-300 focus:border-enterprise-purple outline-none font-bold text-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Content Body</label>
                        <textarea 
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            rows={15}
                            placeholder="Write your article content here..."
                            className="w-full p-4 border border-gray-300 focus:border-enterprise-purple outline-none leading-relaxed"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Excerpt (Short Summary)</label>
                        <textarea 
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="A brief summary for the blog listing page..."
                            className="w-full p-4 border border-gray-300 focus:border-enterprise-purple outline-none"
                        ></textarea>
                    </div>
                </div>

                {/* SEO Card */}
                <div className="bg-white p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-4">
                        Search Engine Optimization (SEO)
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">SEO Title Tag</label>
                            <input 
                                type="text" 
                                name="seoTitle"
                                value={formData.seoTitle}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 focus:border-enterprise-purple outline-none text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">URL Slug</label>
                            <input 
                                type="text" 
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                placeholder="my-awesome-post"
                                className="w-full p-3 border border-gray-300 focus:border-enterprise-purple outline-none text-sm bg-gray-50"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Meta Description</label>
                        <textarea 
                            name="seoDescription"
                            value={formData.seoDescription}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full p-3 border border-gray-300 focus:border-enterprise-purple outline-none text-sm"
                        ></textarea>
                    </div>
                </div>

            </div>

            {/* Sidebar Settings */}
            <div className="space-y-8">
                
                {/* Media Card */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-4">
                        Featured Media
                    </h2>
                    
                    <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center hover:bg-gray-100 transition-colors relative">
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {imagePreview ? (
                            <div className="relative">
                                <img src={imagePreview} alt="Preview" className="w-full h-auto mb-2 shadow-sm" />
                                <span className="text-xs text-enterprise-purple font-bold">Change Image</span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-gray-500">
                                <ImageIcon className="w-8 h-8" />
                                <span className="text-xs font-bold uppercase">Click to Upload Image</span>
                            </div>
                        )}
                    </div>
                    {formData.fileName && (
                        <div className="mt-4 p-3 bg-gray-100 text-xs font-mono text-gray-600 truncate border border-gray-200">
                            File: {formData.fileName}
                        </div>
                    )}
                </div>

                {/* Publishing Card */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-100 pb-4">
                        Publishing Details
                    </h2>
                    
                    <div className="mb-4">
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Author</label>
                        <input 
                            type="text" 
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 focus:border-enterprise-purple outline-none text-sm"
                        />
                    </div>

                    <div className="mb-4">
                         <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Category</label>
                         <select 
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 focus:border-enterprise-purple outline-none text-sm"
                         >
                            <option value="Uncategorized">Uncategorized</option>
                            <option value="AI Automation">AI Automation</option>
                            <option value="Enterprise Tech">Enterprise Tech</option>
                            <option value="Leadership">Leadership</option>
                            <option value="Case Studies">Case Studies</option>
                         </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Publish Date</label>
                        <input 
                            type="text" 
                            name="date"
                            value={formData.date}
                            readOnly
                            className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-500 text-sm cursor-not-allowed"
                        />
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default CmsDashboard;