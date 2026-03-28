# Austin Lance - Software Engineer Portfolio (MyPortfolio)

<p align="center">
</p>

<p align="center">
  <!-- Vercel Deployment Badge -->
  <!-- License Badge -->
</p>

This repository contains the source code for my personal portfolio. It's an immersive showcase of modern web architecture and interactive design, built from the ground up with a focus on elite performance, stunning visuals, and a fluid user experience.

**Live Site:** [**https://portforlio-52lc.vercel.app/**]

---

## 🛠️ Tech Stack & Architecture

| Category              | Technology                                                                                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core Framework**    | [**Next.js 15**](https://nextjs.org/) (App Router), [**React 19**](https://react.dev/)                                                                                                                                                                                                           |
| **Language**          | [**TypeScript**](https://www.typescriptlang.org/)                                                                                                                                                                                                                                              |
| **Styling**           | [**Tailwind CSS**](https://tailwindcss.com/) with a custom, themeable design system.                                                                                                                                                                                                             |
| **Animation**         | [**GSAP (GreenSock)**](https://greensock.com/gsap/) for high-performance timeline animations & [**Three.js**](https://threejs.org/) with [**React Three Fiber**](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) for interactive 3D graphics. |
| **Backend & API**     | [**Next.js API Routes**](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), [**Resend**](https://resend.com/) for email delivery, [**Zod**](https://zod.dev/) for server-side validation. |
| **Deployment**        | [**Vercel**](https://vercel.com/) (Global Edge Network, Instant CI/CD)                                                                                                                                                                                                                         |

---

## ✨ Key Features

-   **Interactive 3D Graphics:** Engaging visuals built with Three.js and React Three Fiber.
-   **Advanced GSAP Animations:** Complex, scroll-triggered, and physics-based animations.
-   **Command Palette:** A `Ctrl+K` interface for quick navigation and actions.
-   **Multi-Theme System:** Seamlessly switch between distinct visual themes.
-   **Custom Cursor & Smooth Scrolling:** For a premium, fluid browsing experience.
-   **Secure API Endpoint:** A robust API route for the contact form with strong validation.

---

## 🚀 Getting Started Locally

1.  **Clone the repository:**
    ```bash
    git clone #/MyPortfolio.git
    cd MyPortfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the project root and add your Resend API key:
    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
