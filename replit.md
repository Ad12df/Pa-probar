# BiblioDigital - Biblioteca Digital Personal

## Overview
BiblioDigital is a personal digital library web application designed to allow users to manage, read, and organize their digital books. The project utilizes local storage mechanisms (localStorage and IndexedDB) to operate entirely without a backend or external database. It offers a rich user experience with features like book cataloging, personalized reading settings, and a responsive design. The vision is to provide a fully client-side, privacy-focused digital library solution that is easy to use and completely free from external service dependencies for its core functionality.

## User Preferences
No explicit user preferences were provided in the original `replit.md` file.

## System Architecture

### UI/UX Decisions
-   **Responsive Design**: Fully adapted for mobile, tablets, and desktop with a professional and modern interface. This includes a collapsible sidebar on mobile and optimized layouts for various screen sizes and orientations.
-   **Theming**: 9 modern visual themes are available, each with a complete color palette, custom gradients, shadows, and adapted styles for all UI elements (sidebar, cards, modals, forms). Themes are designed for excellent contrast and perfect legibility across all text elements (page-title, section-title, labels, etc.).
-   **Authentication Flow**: Designed for optional local authentication. Users can explore content as guests without logging in, with login only required for uploading personal books.

### Technical Implementations
-   **Frontend**: Built using HTML5 for structure, CSS3 with variables for styling and responsive design, and Vanilla JavaScript for application logic.
-   **Book Management**:
    -   Catalog with search and category filters.
    -   Book uploads with custom covers (images converted to base64).
    -   Includes demo books and a favorites feature.
    -   Integrated reader with customizable font size and theme.
-   **Local Authentication**:
    -   User registration and login handled via localStorage.
    -   User data stored locally in the browser; no external authentication server required.
-   **Customizable Settings**:
    -   User profile editing (name, email).
    -   Configurable visual themes, global font size, reader theme (Light, Dark, Sepia).
    -   Notification preferences and password change (for local authentication).

### System Design Choices
-   **Local Storage First**: The core design principle is to be fully client-side, using the browser's local storage capabilities.
    -   **localStorage**: Used for user data (authentication), book metadata (title, author, category, description), favorites, custom settings, and book covers (base64 images).
    -   **IndexedDB**: Employed for storing large binary files, specifically complete PDF files (up to 50MB per file). This overcomes the ~5MB limit of localStorage and is optimized for binary data, offering better performance and asynchronous operations. The database is `BiblioDigitalDB` with an object store `pdfs` where the key is `bookId` and the value is `pdfDataUrl` (base64 encoded PDF).
-   **Server**: A simple Python 3 `http.server` is used for serving static files during development, configured to run on `0.0.0.0:5000` (Replit compatible) with caching disabled for development.
-   **Security Considerations (Development)**: The project acknowledges that its local authentication and storage methods are for demonstration. For production, it strongly recommends implementing password hashing, real JWT-based authentication, HTTPS, input validation, and sanitization to prevent XSS.

## External Dependencies
-   **Python 3**: Used for the `http.server` module to serve static files.
-   **Firebase**: Configuration files (`firebase.json`, `.firebaserc`, `firestore.rules`, `storage.rules`, `firestore.indexes.json`) are included for optional future deployment, indicating potential integration for cloud features like user data, book storage, and libraries. However, the core application functions without active Firebase integration, relying solely on local storage.

## Current Library Content
The application currently includes 3 books from the Warhammer 40,000 universe - "El Libro de Fuego" series by Nick Kyme:
1. **Salamandra** (El Libro de Fuego 1, 2009) - PDF stored in `/books/Salamandra.pdf`
2. **Draco de Fuego** (El Libro de Fuego 2, 2010) - PDF stored in `/books/Draco_de_fuego.pdf`
3. **Nocturne** (El Libro de Fuego 3, 2011) - PDF stored in `/books/Nocturne.pdf`

All PDFs are stored in the `/books/` directory (excluded from git via .gitignore).

## Recent Changes
### October 2025
- ✅ Removed all demo books (El Arte de la Programación, Cien Años de Soledad, Sapiens)
- ✅ Added 3 Warhammer 40K books with physical PDF files
- ✅ Created `/books/` folder for PDF storage
- ✅ Fixed homepage counter to display dynamic book count (now shows actual number of books)
- ✅ Updated .gitignore to exclude books folder
- ✅ Firebase configuration files created for future deployment
- ✅ Removed "Oscuro - Modo Nocturno" theme (8 themes now available)