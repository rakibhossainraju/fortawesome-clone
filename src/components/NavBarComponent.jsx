function NavBarComponent() {
  return (
    <nav className="mx-auto max-w-6xl px-10 py-10">
      <div className="flex items-center justify-between">
        <div className="navbar-left flex items-center">
          <div className="logo mr-20 text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              className="logo-flag-animated h-7 fill-blue-400"
            >
              <g clipPath="url(#logo-flag-animated-mask-clip-path)">
                <g
                  transform="translate(11.3,7)"
                  className="logo-flag-animated-flag-wave-to"
                >
                  <path
                    d="M11.25,2.5c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.01824C18.8946,2.26203,19.5368,2.5,20.5,2.5c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.01824c.658.24379,1.3002.48176,2.2634.48176.9875,0,1.6438-.25,2.3-.5.6563-.25,1.3125-.5,2.3001-.5.9873,0,1.6624.25,2.3374.5l.0491.01824C37.3946,2.26203,38.0368,2.5,39,2.5v2c-.9666,0-1.616-.23962-2.2791-.48438l-.049-.01794C35.9958,3.74841,35.322,3.5,34.3501,3.5c-.9876,0-1.6438.25-2.3001.5-.6562.25-1.3125.5-2.3.5-.9666,0-1.6161-.23963-2.2791-.48422-.0163-.00603-.0327-.01207-.049-.0181C26.7458,3.74841,26.072,3.5,25.1001,3.5c-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.616-.23962-2.2791-.48438l-.049-.01794C17.4958,3.74841,16.822,3.5,15.8501,3.5c-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.61597-.23962-2.27905-.48438l-.04907-.01794C8.24585,3.74841,7.57202,3.5,6.6001,3.5c-.98755,0-1.6438.25-2.30005.5s-1.3125.5-2.30005.5v-2c.98755,0,1.6438-.25,2.30005-.5s1.3125-.5,2.30005-.5c.9873,0,1.66235.25,2.3374.5l.04834.01794C9.64377,2.26174,10.2868,2.5,11.25,2.5Zm0,8c.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818.9875,0,1.6438-.25,2.3-.5s1.3125-.5,2.3001-.5c.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818.9875,0,1.6438-.25,2.3-.5.6563-.25,1.3125-.5,2.3001-.5.9873,0,1.6624.25,2.3374.5l.0491.0182c.658.2438,1.3002.4818,2.2634.4818v2c-.9666,0-1.616-.2396-2.2791-.4844l-.049-.0179c-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5-.6562.25-1.3125.5-2.3.5-.9666,0-1.6161-.2396-2.2791-.4842-.0163-.0061-.0327-.0121-.049-.0181-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.616-.2396-2.2791-.4844l-.049-.0179c-.6761-.2493-1.3499-.4977-2.3218-.4977-.9876,0-1.6438.25-2.3001.5s-1.3125.5-2.3.5c-.9666,0-1.61597-.2396-2.27905-.4844l-.04907-.0179C8.24585,11.7484,7.57202,11.5,6.6001,11.5c-.98755,0-1.6438.25-2.30005.5s-1.3125.5-2.30005.5v-2c.98755,0,1.6438-.25,2.30005-.5s1.3125-.5,2.30005-.5c.9873,0,1.66235.25,2.3374.5l.04834.0179c.65793.2438,1.30096.4821,2.26416.4821Z"
                    transform="translate(-20.5,-7)"
                    fill="var(--fa-brand-blue)"
                  ></path>
                </g>
                <rect
                  width="2"
                  height="8"
                  rx="0"
                  ry="0"
                  transform="translate(13 3)"
                ></rect>
                <path
                  d="M0,16h16v-16L0,0v16ZM2,1q.075195.556641,0,7h3v7h10v-14L2,1Z"
                  fill="white"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
                <clipPath id="logo-flag-animated-mask-clip-path">
                  <rect width="16" height="16" rx="0" ry="0"></rect>
                </clipPath>
              </g>
              <path
                className="fill-blue-1000"
                d="M2,1c-.55228,0-1,.44772-1,1v12c0,.5523.44772,1,1,1s1-.4477,1-1L3,2c0-.55228-.44772-1-1-1Z"
              ></path>
            </svg>
          </div>
          <nav>
            <ul className="flex-center font-ceraroundpros">
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Start
              </li>
              <li className="group mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                <svg
                  className="aspect-square w-4 fill-blue-1000 group-hover:fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,512,512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </li>
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Icons
              </li>
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Docs
              </li>
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Plans
              </li>
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Support
              </li>
              <li className="mr-12 cursor-pointer text-gray-500 duration-200 hover:text-blue-500">
                Podcast
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="navbar-right cursor-pointer text-2xl text-gray-500 hover:text-[var(--color-secondary)]"
          title="Sign in"
        >
          <svg
            className="false false aspect-square w-[1.5rem] fill-gray-500 hover:fill-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,512,512"
          >
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponent;
