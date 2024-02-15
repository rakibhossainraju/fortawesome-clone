import { useDispatch } from "react-redux";
import { resetFilters } from "../store/app-data/app-data.action.js";
export const NoMatchFoundComponent = () => {
  const dispatch = useDispatch();
  const handelClear = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="w-ful my-10">
      <section>
        <div className="flex-center mx-auto mb-10 max-w-3xl flex-col gap-8 rounded-xl bg-white p-10 max-md:max-w-lg ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="face-thinking"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-16"
          >
            <g className="fa-duotone-group">
              <path
                fill="currentColor"
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 45 11.6 87.3 32 124V352c0-30.9 25.1-56 56-56s56 25.1 56 56v3l92.2-33.5-82.4-34.7c-8.1-3.4-12-12.8-8.5-21s12.8-12 21-8.5l122.5 51.6c22.7 9.6 37.9 31.2 39.2 55.6c1.5 24.2-12.9 47.4-36.8 56.1l-35.8 13-21 57.7c-2.5 6.8-5.8 13.1-9.8 18.8c10.3 1.3 20.8 1.9 31.4 1.9zM176.4 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-88-63.2c-20.5-17.6-49.9-20.4-73.4-7l-7.1 4c-7.7 4.4-17.4 1.7-21.8-6s-1.7-17.4 6-21.8l7.1-4c35.2-20.1 79.3-15.9 110.1 10.5l13.2 11.3c6.7 5.8 7.5 15.9 1.7 22.6s-15.9 7.5-22.6 1.7l-13.2-11.3z"
                className="text-yellow-400"
              ></path>
              <path
                fill="currentColor"
                d="M143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4zM176.4 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM112 352c0-13.3-10.7-24-24-24s-24 10.7-24 24V464c0 26.5 21.5 48 48 48h47.2c20.2 0 38.2-12.6 45.1-31.6l26.1-71.7 49.8-18.1c12.5-4.5 18.9-18.3 14.4-30.8s-18.3-18.9-30.8-14.4L112 400.6V352zM368.4 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                className="text-blue-950"
              ></path>
            </g>
          </svg>
          <h3 className="text-center font-ceraroundpros text-5xl font-bold text-blue-950">
            No Icons Found
          </h3>
          <p className="mx-auto max-w-2xl text-center font-ceraroundpros text-xl font-medium text-blue-1000">
            There are no icons that match your current filters. Try removing
            some of them to get better results.
          </p>
          <button
            onClick={handelClear}
            className="flex-center rounded-lg border-2 border-blue-1000 px-5 py-4 shadow-[0_6px_#183153FF] outline-rose-800 active:bg-slate-300"
          >
            <span className="text-lg font-medium text-blue-1000">
              Clear All Filters + Start Over
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        {/*CARD 1*/}
        <div className="h-70 w-64 overflow-y-hidden rounded-2xl border-2 border-b-8 bg-white text-center shadow-lg hover:border-blue-400 ">
          <div className="flex-center bg-blue-400 py-8">
            <svg
              className="max-w-24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M17 18.4299H13L8.54999 21.39C7.88999 21.83 7 21.3599 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z"
                  className="fill-blue-1000 opacity-90"
                ></path>
                <path
                  d="M11.9998 12.1099C11.5898 12.1099 11.2498 11.7699 11.2498 11.3599V11.1499C11.2498 9.9899 12.0998 9.41989 12.4198 9.19989C12.7898 8.94989 12.9098 8.7799 12.9098 8.5199C12.9098 8.0199 12.4998 7.60986 11.9998 7.60986C11.4998 7.60986 11.0898 8.0199 11.0898 8.5199C11.0898 8.9299 10.7498 9.2699 10.3398 9.2699C9.92984 9.2699 9.58984 8.9299 9.58984 8.5199C9.58984 7.1899 10.6698 6.10986 11.9998 6.10986C13.3298 6.10986 14.4098 7.1899 14.4098 8.5199C14.4098 9.6599 13.5698 10.2299 13.2598 10.4399C12.8698 10.6999 12.7498 10.8699 12.7498 11.1499V11.3599C12.7498 11.7799 12.4098 12.1099 11.9998 12.1099Z"
                  className="fill-blue-400"
                ></path>
                <path
                  d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z"
                  className="fill-blue-400"
                ></path>
              </g>
            </svg>
          </div>
          <div className="px-3 py-5 font-ceraroundpros text-blue-1000">
            <h1 className="mb-4 text-xl font-bold">Request an Icon</h1>
            <p className="text-lg">
              Suggest an icon idea to our community and vote it up the ranks of
              our Icon Requests Leaderboard.
            </p>
          </div>
        </div>
        {/*CARD 2*/}
        <div className="h-70 w-64 overflow-y-hidden rounded-2xl border-2 border-b-8 bg-white text-center shadow-lg hover:border-green-400 ">
          <div className="flex-cente bg-green-400 py-10">
            <svg
              className="mx-auto max-w-24 fill-blue-1000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,640,512"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
            </svg>
          </div>
          <div className="px-3 py-5 font-ceraroundpros text-blue-1000">
            <h1 className="mb-4 text-xl font-bold">Upload an Icon</h1>
            <p className="text-lg">
              Upload your own icon to a Kit and easily use it just like it an
              official Font Awesome icon!
            </p>
          </div>
        </div>
        {/*CARD 3*/}
        <div className="h-70 w-64 overflow-y-hidden rounded-2xl border-2 border-b-8 bg-white text-center shadow-lg hover:border-yellow-400 ">
          <div className="flex-cente r bg-yellow-400 py-8">
            <svg
              className="mx-auto max-w-24 fill-blue-1000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76M12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1" />
            </svg>
          </div>
          <div className="px-3 py-5 font-ceraroundpros text-blue-1000">
            <h1 className="mb-4 text-xl font-bold">Icon Commissions</h1>
            <p className="text-lg">
              Absolutely need an icon? Sponsor it and we'll design it for you
              and add it to Font Awesome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
