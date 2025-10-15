# My Food - Screen Previews

This document describes the visual appearance and layout of each screen in the My Food mobile app.

## Sign In Screen

**Layout**: Centered vertical layout
**Elements**:
- App title "Welcome to My Food" (large, tomato red)
- Subtitle "Sign in to continue" (gray)
- Email input field (bordered, rounded)
- Password input field (bordered, rounded, secure)
- "Sign In" button (tomato red, prominent)
- "Don't have an account? Sign Up" link (tomato red text)

**Colors**: White background, tomato red accents (#FF6347)

---

## Sign Up Screen

**Layout**: Scrollable form layout
**Elements**:
- Title "Create Account" (large, bold)
- Profile photo picker:
  - Circular placeholder with dashed border
  - "+" icon and "Add Profile Photo" text
  - Displays selected image when uploaded
- Name input field
- Surname input field
- Email input field
- Password input field (secure)
- Country input field
- "Sign Up" button (tomato red)
- "Already have an account? Sign In" link

**Colors**: White background, tomato red accents

---

## Home Screen

**Layout**: Scrollable content with sections
**Elements**:
1. **Header**: "Welcome to My Food!" (bold, large)

2. **Camera Section**:
   - Large button with camera icon "📷 Take Food Photo"
   - Tomato red background

3. **Photo Gallery** (appears after taking photos):
   - "Your Food Photos" section title
   - Horizontal scrolling list of captured images
   - Square thumbnails with rounded corners

4. **Popular Foods Section**:
   - "Popular Foods" section title
   - Food items as cards:
     - Food name (bold)
     - Category (gray text)
     - Star rating (tomato red)
   - Tappable cards with light gray background

5. **Navigation Buttons**:
   - "❤️ Favorites" button (green)
   - "💡 Recommendations" button (green)

**Colors**: White background, tomato red and green accents

---

## Favorites Screen

**Layout**: List view with header
**Elements**:
1. **Header**: "Your Favorite Foods" (large, bold)

2. **Food List**:
   - Each item shows:
     - Food name (bold)
     - Category (gray)
     - Star rating (tomato red)
     - Remove button (❌ icon)
   - Light gray card background
   - Tappable to view details

3. **Empty State** (when no favorites):
   - "No favorites yet!" (centered, gray)
   - "Start adding foods you love to your favorites" (subtext)

4. **Footer**: "← Back to Home" button (tomato red)

**Colors**: White background, tomato red accents

---

## Recommendation Screen

**Layout**: List view with header and subtitle
**Elements**:
1. **Header**: 
   - "Recommended for You" (large, bold)
   - "Foods you might enjoy" (subtitle, gray)

2. **Recommendation Cards**:
   - Green left border accent
   - Food name (bold)
   - Category (gray)
   - Recommendation reason with light bulb icon (💡)
   - Star rating (tomato red)
   - Arrow indicator (→)
   - Light gray background

3. **Footer**: "← Back to Home" button (tomato red)

**Colors**: White background, green and tomato red accents

---

## Details Screen

**Layout**: Scrollable detailed view
**Elements**:

1. **Header Section**:
   - Food name (large, bold)
   - Category with "Cuisine" label (gray)
   - Heart icon for favorite toggle (🤍/❤️)

2. **Rating Section**:
   - Star rating with number (tomato red)
   - Review count "(150+ reviews)" (gray)

3. **Description Section**:
   - "Description" title
   - Multi-line description text

4. **Nutrition Information**:
   - "Nutrition Information" title
   - Grid layout with 4 items:
     - Calories (number)
     - Protein (grams)
     - Carbs (grams)
     - Fat (grams)
   - Each in a box with value and label
   - Light gray background

5. **Ingredients Section**:
   - "Ingredients" title
   - Bullet points (tomato red bullets)
   - List of ingredients

6. **Footer**: "← Back" button (tomato red)

**Colors**: White background, tomato red accents, gray information boxes

---

## Common Design Elements

### Typography
- **Titles**: 28px, Bold, Dark Gray (#333)
- **Subtitles**: 16-18px, Medium Gray (#666)
- **Body Text**: 16px, Medium Gray (#666)
- **Button Text**: 18px, Bold, White
- **Small Text**: 12-14px, Gray

### Buttons
- **Primary Buttons**: Tomato red background (#FF6347), white text, 50px height, rounded corners
- **Secondary Buttons**: Green background (#4CAF50), white text, rounded corners
- **Text Links**: Tomato red text, no background

### Input Fields
- Height: 50px
- Border: 1px solid light gray (#ddd)
- Border radius: 8px
- Padding: 15px horizontal
- Font size: 16px

### Cards
- Background: Light gray (#f9f9f9)
- Border radius: 8px
- Padding: 15px
- Margin bottom: 10px

### Color Palette
- **Primary**: Tomato Red (#FF6347)
- **Secondary**: Green (#4CAF50)
- **Background**: White (#FFFFFF)
- **Card Background**: Light Gray (#F9F9F9)
- **Text Primary**: Dark Gray (#333333)
- **Text Secondary**: Medium Gray (#666666)
- **Border**: Light Gray (#DDDDDD)

### Spacing
- Screen padding: 20px
- Element margin: 10-20px
- Section spacing: 20-30px

---

## Responsive Behavior

- All screens adapt to different screen sizes
- ScrollView used for content that may exceed screen height
- Touch targets sized appropriately (minimum 44x44 points)
- Text inputs expand to full width with proper padding
- Images maintain aspect ratio

## Accessibility Features

- Clear visual hierarchy
- Sufficient color contrast
- Readable font sizes
- Clear touch targets
- Descriptive labels for interactive elements

---

*Note: This document describes the visual design. For actual screenshots, run the app on a device or emulator and capture screen images.*
