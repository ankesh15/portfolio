# Personal Portfolio Website

A modern and responsive personal portfolio website built with **Next.js 14**, **React**, and **Tailwind CSS**. This project showcases your skills, projects, and provides a way for visitors to contact you.

## Features

- **Responsive Design:** Adapts seamlessly to various screen sizes and devices.
- **Parallax Effect:** Visually engaging background images that move at different speeds when scrolling.
- **Smooth Animations:** Utilizes Framer Motion for smooth and interactive element animations.
- **Dedicated Pages:** Separate pages for Home, About, Portfolio, and Contact using Next.js file-based routing.
- **Skills Section:** Highlights your technical skills on the home page.
- **Portfolio Showcase:** Displays your projects with details and links on a dedicated page.
- **Contact Form:** Allows visitors to send you messages.
- **Modern UI:** Clean and modern design with consistent styling.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd portfolio
    ```
    Replace `<repository_url>` with the actual URL of your repository.

2.  **Install dependencies:**

    ```bash
    npm install
    # Or using yarn:
    # yarn install
    ```
    This will install all the necessary packages, including Framer Motion.

3.  **Run the development server:**

    ```bash
    npm run dev
    # Or using yarn:
    # yarn dev
    ```

4.  **Open in your browser:**

    Open [http://localhost:3000](http://localhost:3000) in your web browser to see the website.

## Customization

Make the following changes to personalize the portfolio:

-   **Personal Information:** Update your name, title, and description in `src/app/page.tsx` and `src/components/Navbar.tsx`.
-   **Profile Picture:** Replace the placeholder `/public/images/profile.jpg` with your own image.
-   **Background Images:** Replace the placeholder images in `/public/images/` with your preferred light-themed background images.
-   **Skills:** Modify the skills listed in the `Skills` section data within `src/app/page.tsx`.
-   **Projects:** Update the `projects` array in `src/app/portfolio/page.tsx` with your project details, images, and links.
-   **Contact Information:** Update the email, phone number, and social media links in `src/app/contact/page.tsx`.
-   **About Content:** Customize the content in the `About` section in `src/app/about/page.tsx`.
-   **Styling:** Adjust the styling using Tailwind CSS classes throughout the components.
-   **Metadata:** Update the site title and description in `src/app/layout.tsx`.

## Technologies Used

-   [Next.js 14](https://nextjs.org/)
-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)
-   ESLint

## Project Structure

```
portfolio/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── app/        # Next.js app directory (pages and layout)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   └── (other app files like layout.tsx, page.tsx, globals.css)
│   ├── components/ # React components (like Navbar)
│   └── (other source files)
├── package.json     # Project dependencies and scripts
├── README.md        # Project documentation
└── (other configuration files)
```

## Contributing

Feel free to submit issues and enhancement requests! If you'd like to contribute, please fork the repository and create a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

-   [Unsplash](https://unsplash.com/) for providing beautiful background images.
-   [Heroicons](https://heroicons.com/) for the icons used in the project.
