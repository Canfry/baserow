/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_Clasqc6t.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="w-full bg-black/80 relative grid grid-cols-4 mb-8"> <img src="/images/tokyo.jpg" alt="view" class="object-cover h-full"> <img src="/images/copen.jpg" alt="view" class="object-cover h-full"> <img src="/images/sevilla.jpg" alt="view" class="object-cover h-full"> <img src="/images/chicago.jpg" alt="view" class="object-cover h-full"> <div class="absolute left-0 top-0 w-full h-full px-8 bg-black/80 flex flex-col items-center justify-center"> <h1 class="text-white text-6xl">Points Of <span class="text-yellow-500">Interest</span></h1> <h1 class="text-white/80 font-thin text-4xl">Organize better your next trip checking the places to go first.</h1> <a${addAttribute(Astro2.url.pathname == "/" ? "/form" : "/", "href")}><button class="mt-8 px-4 py-2 bg-yellow-500 text-black/80 font-bold text-lg rounded-md hover:bg-yellow-600 transition-all duration-300">${Astro2.url.pathname == "/" ? "Add a review" : "Homepage"}</button></a> </div> </header>`;
}, "/Users/christopheanfry/anfrydev/baserow/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-white"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/christopheanfry/anfrydev/baserow/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  if (Astro2.request.method === "POST") {
    const body = await Astro2.request.formData();
    const name = body.get("name");
    const location = body.get("location");
    const type = body.get("type");
    const rating = body.get("rating");
    const city = body.get("city");
    const country = body.get("country");
    const data = {
      Name: name,
      Location: location,
      Type: type,
      Rating: rating,
      City: city,
      Country: country
    };
    console.log(data);
    await fetch(`${{"PUBLIC_API_KEY": "lWsjcZbOjqvPU6zjEqKP62UKo0CQrXMp", "PUBLIC_LOCATIONS_FIELDS_URL": "https://api.baserow.io/api/database/fields/table/262562/", "PUBLIC_LOCATIONS_ROWS_URL": "https://api.baserow.io/api/database/rows/table/262562/?user_field_names=true", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.LOCATIONS_ROWS_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${"lWsjcZbOjqvPU6zjEqKP62UKo0CQrXMp"}`
      },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then((data2) => console.log(data2)).catch((error) => console.log(error));
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "form" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center"> <form method="POST" class="mb-16 flex flex-col items-start gap-y-4"> <h1 class="text-4xl font-bold text-slate-700">
Add a new point of interest.
</h1> <div class="flex w-full flex-col items-start gap-y-1"> <label for="name" class="text-lg font-bold text-slate-500">Name:</label> <input type="text" id="name" name="name" placeholder="Enter the name" class="w-full rounded-md bg-slate-100 p-2 px-3"> </div> <div class="flex w-full flex-col items-start gap-y-1"> <label for="location" class="text-lg font-bold text-slate-500">Location: (paste the Google Maps URL)</label> <input type="text" id="location" name="location" placeholder="Google Maps URL" class="w-full rounded-md bg-slate-100 p-2 px-3"> </div> <div class="flex w-full flex-col items-start gap-y-1"> <label for="type" class="text-lg font-bold text-slate-500">Type:</label> <input type="text" id="type" name="type" placeholder="Restaurant, Museum..." class="w-full rounded-md bg-slate-100 p-2 px-3"> </div> <div class="flex w-full flex-col items-start gap-y-1"> <label for="rating" class="text-lg font-bold text-slate-500">Rating:</label> <select name="rating" class="bg-slate-100"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select> </div> <div class="flex w-full flex-col items-start gap-y-1"> <label for="city" class="text-lg font-bold text-slate-500">City:</label> <input type="text" id="city" name="city" placeholder="Enter the city" class="w-full rounded-md bg-slate-100 p-2 px-3"> </div> <div class="flex w-full flex-col items-start gap-y-1"> <label for="name" class="text-lg font-bold text-slate-500">Country:</label> <input type="text" id="country" name="country" placeholder="Enter the country" class="w-full rounded-md bg-slate-100 p-2 px-3"> </div> <button type="submit" class="rounded-md bg-slate-700 p-2 px-4 text-white">Submit</button> </form> </main> ` })}`;
}, "/Users/christopheanfry/anfrydev/baserow/src/pages/form/index.astro", void 0);
const $$file$1 = "/Users/christopheanfry/anfrydev/baserow/src/pages/form/index.astro";
const $$url$1 = "/form";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function Search({ headers }) {
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const getData = useCallback(async function loadData() {
    const response = await fetch(`${"https://api.baserow.io/api/database/rows/table/262562/?user_field_names=true"}`, {
      headers: {
        Authorization: `Token ${"lWsjcZbOjqvPU6zjEqKP62UKo0CQrXMp"}`
      }
    });
    const data2 = await response.json();
    console.log(data2);
    setData(data2.results);
  }, [data]);
  function handleChange() {
    if (searchInput.current?.value === "")
      return getData();
    const value = searchInput.current?.value;
    const filteredData = data.filter(
      (city) => city?.City?.toLowerCase().includes(value?.toLowerCase())
    );
    setData(filteredData);
    console.log(value);
  }
  useEffect(() => {
    getData();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full mb-6", children: /* @__PURE__ */ jsx("input", { onChange: handleChange, className: "py-2 px-3 rouded-md bg-slate-100", type: "text", placeholder: "Search by city name", ref: searchInput }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: headers?.map(
        (header) => /* @__PURE__ */ jsx("th", { className: "px-8 w-[80px] m-auto text-yellow-500 text-2xl text-center", children: header.name }, header.id)
      ) }) }),
      /* @__PURE__ */ jsx("tbody", { children: data?.map((result, index) => /* @__PURE__ */ jsxs("tr", { className: "mt-4 text-xl text-slate-600 hover:bg-slate-600 hover:text-slate-100", children: [
        /* @__PURE__ */ jsx("td", { className: "text-center w-[40px]", children: result.Name }),
        /* @__PURE__ */ jsx("td", { className: "text-center max-w-10 overflow-x-auto hover:text-white font-bold", children: /* @__PURE__ */ jsx("a", { href: result.Location, target: "_blank", children: "Map" }) }),
        /* @__PURE__ */ jsx("td", { className: "text-center w-[40px]", children: result.Type }),
        /* @__PURE__ */ jsx("td", { className: "text-center w-[40px]", children: result.Rating }),
        /* @__PURE__ */ jsx("td", { className: "text-center w-[40px]", children: result.City }),
        /* @__PURE__ */ jsx("td", { className: "text-center w-[40px]", children: result.Country })
      ] }, index)) })
    ] }) })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  async function loadHeaders() {
    const response = await fetch(
      `${"https://api.baserow.io/api/database/fields/table/262562/"}`,
      {
        headers: {
          Authorization: `Token ${"lWsjcZbOjqvPU6zjEqKP62UKo0CQrXMp"}`
        }
      }
    );
    const data = await response.json();
    return data;
  }
  const headers = await loadHeaders();
  console.log(headers);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Interest." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-8 max-w-[90%] m-auto"> ${renderComponent($$result2, "Search", Search, { "client:load": true, "headers": headers, "client:component-hydration": "load", "client:component-path": "/Users/christopheanfry/anfrydev/baserow/src/components/Search.tsx", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/christopheanfry/anfrydev/baserow/src/pages/index.astro", void 0);
const $$file = "/Users/christopheanfry/anfrydev/baserow/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
