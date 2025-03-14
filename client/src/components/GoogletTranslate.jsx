import { useEffect, useState } from "react";
function GoogleTranslateToggle() {
  const [isVisible, setIsVisible] = useState(false);

  // Load and initialize Google Translate
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <div className='relative'>
      {/* Icon to toggle visibility */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        title='Translate'
        className='absolute -top-9 right-0 z-50 bg-transparent hover:scale-125 transition-all duration-500 delay-100'
        aria-label='Toggle Google Translate'>
        <span className='h-3 w-3 md:h-4 md:w-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78c-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16m6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47c-.31-.35-.6-.72-.86-1.1zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5l-1.04-3.1l3.1 3.1l.92-.92l-3.3-3.25l.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1z'></path>
          </svg>
        </span>
      </button>

      {/* Google Translate container */}
      <div
        id='google_translate_element'
        className={`absolute -top-4 -right-6 z-50 bg-transparent  transition-all duration-300 ${
          isVisible ? "block" : "hidden"
        }`}></div>
    </div>
  );
}

export default GoogleTranslateToggle;
