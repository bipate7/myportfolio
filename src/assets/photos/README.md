# Photography Images Setup

## 📸 How to Add Your Photos

### 📁 Folder Structure:
```
src/assets/photos/
├── mountain-landscapes.jpg
├── street-stories.jpg  
├── natures-beauty.jpg
├── portrait-sessions.jpg
├── heritage-architecture.jpg
└── wildlife-encounters.jpg
```

### 🎯 Image Naming Convention:
- **Use lowercase**
- **Replace spaces with hyphens (-)**
- **Match the title from App.jsx**

### 📝 Current Photo Titles:
1. "Mountain Landscapes" → `mountain-landscapes.jpg`
2. "Street Stories" → `street-stories.jpg`
3. "Nature's Beauty" → `natures-beauty.jpg`
4. "Portrait Sessions" → `portrait-sessions.jpg`
5. "Heritage Architecture" → `heritage-architecture.jpg`
6. "Wildlife Encounters" → `wildlife-encounters.jpg`

### 🔄 Alternative: Add Image URLs Directly

You can also add `image` property to each photo object in `src/App.jsx`:

```javascript
{
  title: "Mountain Landscapes",
  category: "Landscapes",
  description: "Capturing the majestic beauty...",
  image: "https://your-image-url.com/mountain.jpg", // ← Add this
  featured: true
}
```

### ✅ Features:
- **Automatic fallback** to gradient if image not found
- **Responsive design** with proper aspect ratios
- **Hover effects** with camera overlay
- **Featured badges** for special photos
- **Category filtering** (coming soon)

### 🚀 After Adding Images:
1. Place your photos in this folder
2. Restart the development server
3. Visit the photography section
4. Images will appear automatically

---

**Ready to showcase your amazing photography! 📸**
