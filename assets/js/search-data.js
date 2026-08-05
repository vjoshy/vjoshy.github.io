// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications and preprints are listed in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I&#39;ve been involved with",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "This is a non-exhaustive list of books I have read over the years since I turned 18. I prefer non-fiction and try to cover a wide breadth of topics. This list reflects my reading activity, not my opinions, values, or personal philosophy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-bmath-hons-mathematical-science",
          title: 'Graduated from BMath.(Hons) Mathematical Science!',
          description: "",
          section: "News",},{id: "news-started-msc-applied-statistics-at-university-of-guelph",
          title: 'Started MSc. Applied Statistics at University of Guelph',
          description: "",
          section: "News",},{id: "news-completed-msc-applied-statistics-at-university-of-guelph",
          title: 'Completed MSc. Applied Statistics at University of Guelph',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
