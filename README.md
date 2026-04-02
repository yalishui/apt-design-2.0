# 📅 APT - Calendar & Important Dates Manager

A personal calendar tool for managing important dates, test schedules, and college applications. Clean, fast, and focused on what matters.

## Current Version: Design 2.0 ✅

**Status**: Locked (Production)  
**Last Updated**: April 2, 2026 (Added Queen's & McMaster)

---

## Features

### Core Functionality
- ✅ **Calendar-First Interface**: Clean, focused calendar design
- ✅ **Multi-Tab Navigation**: Organized by category
- ✅ **Important Dates Tracking**: All your key dates in one place
- ✅ **Test Schedule Management**: UCAT, SAT, IELTS dates
- ✅ **Canadian Universities**: Complete application tracking for 6 universities
- ✅ **Hong Kong Holidays**: Built-in public holiday calendar
- ✅ **Birthday Management**: Track family birthdays
- ✅ **Local Storage**: All data saved locally, no backend needed
- ✅ **Mobile Optimized**: Touch-friendly, responsive design
- ✅ **PWA Ready**: Install as app on mobile devices

### Calendar Tabs

1. **All** - Comprehensive view of all important dates
2. **🇨🇦 Canadian** - Canadian university applications
   - UBC (University of British Columbia)
   - McGill University
   - University of Toronto (UofT)
   - University of Waterloo
   - Queen's University
   - McMaster University
3. **🏙️ HK** - Hong Kong public holidays (2026)
4. **📚 UCAT** - UCAT 2026 test dates and deadlines
5. **✍️ SAT** - SAT 2026 test dates and deadlines
6. **🌍 IELTS** - IELTS 2026 test dates (Paper-based & Computer-delivered)
7. **🎂** - Birthday reminders

### Canadian Universities Features

Each university includes:
- **Sub-tabs** for individual university view
- **Label View**: Compact list with days remaining and color-coded importance
- **Detail View**: Full university information cards
- **Quick Links**: Direct access to official websites and application portals
- **Comprehensive Modals**: Complete information including:
  - Quick links section
  - Program overview and details
  - Upcoming deadlines with action links
  - 8-step application process
  - Requirements breakdown (Academic, Tests, Documents, Other)
  - Contact information
  - Important notes and warnings

---

## How to Use

### Navigate the Calendar

1. **Switch Tabs**: Click on any tab button to view different date categories
2. **Canadian Sub-Tabs**: Under Canadian tab, choose All/UBC/McGill/UofT/Waterloo/Queen's/McMaster
3. **View Modes**: Toggle between Label View (compact) and Detail View (full cards)
4. **View Details**: Click any date card or university to see complete information
5. **Access Links**: Use quick links in modals to visit official websites

### Calendar Features

- **Days Remaining**: Each date shows how many days until it occurs
- **Urgency Highlighting**:
  - 🔴 Red: ≤7 days away (urgent)
  - 🟠 Orange: ≤30 days away (soon)
  - 🟢 Green: >30 days away (normal)
- **Importance Indicators**: Critical, High, Normal importance levels
- **Action Links**: Direct links to relevant pages for each date

---

## Getting Started

### Option 1: Simple HTTP Server (Python)

```bash
python3 -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: Use npx (if you have Node.js installed)

```bash
npx serve
```

### Option 3: Open directly in browser

Just open `index.html` in your browser.

### Option 4: GitHub Pages (Recommended for sharing)

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select "main" branch
4. Access at: `https://YOUR_USERNAME.github.io/apt-design-2.0/`

---

## Browser Compatibility

- ✅ **Best Experience**: Chrome, Edge, Safari (latest versions)
- ✅ **Mobile Optimized**: iOS Safari, Chrome Mobile
- ✅ **Desktop Compatible**: All modern browsers
- ⚠️ **No Voice Features**: Voice assistant removed in v2.0

---

## Data Sources

### Built-in Data
- **HK Holidays**: 2026 Hong Kong Public Holidays
- **UCAT**: 2026 UCAT test dates and deadlines (UK time)
- **SAT**: 2026 SAT test dates and registration deadlines (US Eastern Time)
- **IELTS**: 2026 IELTS test dates - Paper-based & Computer-delivered (Hong Kong)
- **Canadian Universities**: Comprehensive data for undergraduate life science programs

### Canadian Universities Data
- **UBC**: Application deadlines, requirements, and links
- **McGill**: Application process and key dates
- **University of Toronto**: OUAC application system details
- **Waterloo**: AIF (Admission Information Form) and requirements

---

## Tech Stack

- **Pure HTML, CSS, JavaScript**: No frameworks, no dependencies
- **LocalStorage**: Client-side data persistence
- **Custom Calendar Logic**: Built from scratch
- **Responsive CSS**: Mobile-first design
- **PWA**: Progressive Web App capabilities

---

## File Structure

```
APT-Design-2.0/
├── index.html                      # Main HTML structure
├── styles.css                      # All styling and responsive design
├── app.js                         # Application logic
├── important-dates.js             # Built-in date data
├── canadian-colleges-data.js      # Canadian universities data
├── canadian-colleges-summary.md   # Application guide
├── manifest.json                  # PWA manifest
├── README.md                      # This file
├── apt-design-2.0.md             # Version documentation
└── .gitignore                     # Git ignore file
```

---

## Version History

### v2.0 Update (April 2, 2026)
- ✅ Added Queen's University (Kingston, Ontario)
- ✅ Added McMaster University (Hamilton, Ontario)
- ✅ Expanded Canadian universities from 4 to 6

### v2.0 (March 21, 2026) - Current ✅
- ✅ Canadian universities integration (4 universities)
- ✅ IELTS test dates added
- ✅ Removed College Apps tab (simplified interface)
- ✅ Excluded Canadian items from All tab
- ✅ Sub-tabs for each Canadian university
- ✅ Label View and Detail View modes
- ✅ Quick action links to official websites
- ✅ Comprehensive university detail modals

### v1.0 (Previous)
- Voice assistant integration
- Note/reminder creation via conversation
- College application tracking with tasks

---

## Future Enhancements

Potential features for v3.0:
- [ ] Voice assistant re-integration (optional)
- [ ] Cloud sync and backup
- [ ] Push notifications for upcoming dates
- [ ] Calendar export (ICS format)
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Data import/export
- [ ] Advanced filtering and search

---

## Deployment

### GitHub Pages (Recommended)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "APT Design 2.0 - Locked version"

# Rename branch to main (if needed)
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/apt-design-2.0.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Alternative Hosting
- Netlify (drag and drop)
- Vercel (zero-config deployment)
- Any static hosting service

---

## Support & Documentation

- **Version Details**: See `apt-design-2.0.md` for complete documentation
- **Canadian Guide**: See `canadian-colleges-summary.md` for application guide
- **GitHub Issues**: Report bugs or request features

---

## License

MIT License - Free to use, modify, and distribute.

---

**Design 2.0 - Locked Version**  
March 21, 2026  
Built with ❤️ for students and professionals
