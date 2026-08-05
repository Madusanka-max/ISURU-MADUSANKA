/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/openai */ \"(rsc)/./lib/openai.ts\");\n/* harmony import */ var _lib_portfolio_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/portfolio-data */ \"(rsc)/./lib/portfolio-data.ts\");\n\n\n\nconst SYSTEM_PROMPT = (context)=>`\nYou are an AI assistant for Isuru Madusanka Rodrigo's developer portfolio. \nYou act as a virtual version of Isuru and answer questions on his behalf.\n\nCRITICAL RULES:\n1. Answer ONLY using the portfolio information provided below. Do NOT invent, hallucinate, or extrapolate beyond what is given.\n2. If a question cannot be answered from the portfolio data, respond exactly with: \"I don't currently have that information in my portfolio.\"\n3. Never invent projects, certifications, skills, or experience not listed.\n4. Be friendly, professional, and concise. Use first-person perspective (e.g., \"I studied at...\", \"I worked on...\").\n5. When mentioning contact info, always include email and LinkedIn.\n6. For resume, direct users to download it from the portfolio.\n7. Format responses in clear, readable markdown when appropriate.\n\n=== PORTFOLIO DATA ===\n${context}\n=== END OF PORTFOLIO DATA ===\n`;\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { message, history = [] } = body;\n        if (!message || typeof message !== \"string\" || message.trim().length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Message is required\"\n            }, {\n                status: 400\n            });\n        }\n        if (message.length > 1000) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Message too long\"\n            }, {\n                status: 400\n            });\n        }\n        const portfolioContext = (0,_lib_portfolio_data__WEBPACK_IMPORTED_MODULE_2__.buildPortfolioContext)();\n        const messages = [\n            {\n                role: \"system\",\n                content: SYSTEM_PROMPT(portfolioContext)\n            },\n            ...history.slice(-10).map((msg)=>({\n                    role: msg.role,\n                    content: msg.content\n                })),\n            {\n                role: \"user\",\n                content: message.trim()\n            }\n        ];\n        const completion = await _lib_openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chat.completions.create({\n            model: \"gpt-4o-mini\",\n            messages,\n            max_tokens: 800,\n            temperature: 0.3\n        });\n        const response = completion.choices[0]?.message?.content ?? \"I'm sorry, I couldn't generate a response. Please try again.\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            response\n        });\n    } catch (error) {\n        console.error(\"Chat API error:\", error);\n        if (error instanceof Error && error.message.includes(\"OPENAI_API_KEY\")) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to process your message. Please try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUN0QjtBQUMyQjtBQUc3RCxNQUFNRyxnQkFBZ0IsQ0FBQ0MsVUFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjNUMsRUFBRUEsUUFBUTs7QUFFVixDQUFDO0FBRU0sZUFBZUMsS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLE9BQW9CLE1BQU1ELFFBQVFFLElBQUk7UUFDNUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRSxFQUFFLEdBQUdIO1FBRWxDLElBQUksQ0FBQ0UsV0FBVyxPQUFPQSxZQUFZLFlBQVlBLFFBQVFFLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7WUFDMUUsT0FBT1oscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUssT0FBTztZQUFzQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0U7UUFFQSxJQUFJTCxRQUFRRyxNQUFNLEdBQUcsTUFBTTtZQUN6QixPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFSyxPQUFPO1lBQW1CLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN4RTtRQUVBLE1BQU1DLG1CQUFtQmIsMEVBQXFCQTtRQUU5QyxNQUFNYyxXQUE4RTtZQUNsRjtnQkFBRUMsTUFBTTtnQkFBVUMsU0FBU2YsY0FBY1k7WUFBa0I7ZUFDeERMLFFBQVFTLEtBQUssQ0FBQyxDQUFDLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO29CQUNsQ0osTUFBTUksSUFBSUosSUFBSTtvQkFDZEMsU0FBU0csSUFBSUgsT0FBTztnQkFDdEI7WUFDQTtnQkFBRUQsTUFBTTtnQkFBUUMsU0FBU1QsUUFBUUUsSUFBSTtZQUFHO1NBQ3pDO1FBRUQsTUFBTVcsYUFBYSxNQUFNckIsbURBQU1BLENBQUNzQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3REQyxPQUFPO1lBQ1BWO1lBQ0FXLFlBQVk7WUFDWkMsYUFBYTtRQUNmO1FBRUEsTUFBTUMsV0FBV1AsV0FBV1EsT0FBTyxDQUFDLEVBQUUsRUFBRXJCLFNBQVNTLFdBQVc7UUFFNUQsT0FBT2xCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRXFCO1FBQVM7SUFDdEMsRUFBRSxPQUFPaEIsT0FBZ0I7UUFDdkJrQixRQUFRbEIsS0FBSyxDQUFDLG1CQUFtQkE7UUFFakMsSUFBSUEsaUJBQWlCbUIsU0FBU25CLE1BQU1KLE9BQU8sQ0FBQ3dCLFFBQVEsQ0FBQyxtQkFBbUI7WUFDdEUsT0FBT2pDLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO2dCQUFFSyxPQUFPO1lBQTBGLEdBQ25HO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPZCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtZQUFFSyxPQUFPO1FBQW9ELEdBQzdEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcTGVhcm5pbmdcXEdpdEh1YlxcSVNVUlVNQURVU0FOS0FcXGFwcFxcYXBpXFxjaGF0XFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgb3BlbmFpIGZyb20gXCJAL2xpYi9vcGVuYWlcIjtcbmltcG9ydCB7IGJ1aWxkUG9ydGZvbGlvQ29udGV4dCB9IGZyb20gXCJAL2xpYi9wb3J0Zm9saW8tZGF0YVwiO1xuaW1wb3J0IHR5cGUgeyBDaGF0UmVxdWVzdCB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmNvbnN0IFNZU1RFTV9QUk9NUFQgPSAoY29udGV4dDogc3RyaW5nKSA9PiBgXG5Zb3UgYXJlIGFuIEFJIGFzc2lzdGFudCBmb3IgSXN1cnUgTWFkdXNhbmthIFJvZHJpZ28ncyBkZXZlbG9wZXIgcG9ydGZvbGlvLiBcbllvdSBhY3QgYXMgYSB2aXJ0dWFsIHZlcnNpb24gb2YgSXN1cnUgYW5kIGFuc3dlciBxdWVzdGlvbnMgb24gaGlzIGJlaGFsZi5cblxuQ1JJVElDQUwgUlVMRVM6XG4xLiBBbnN3ZXIgT05MWSB1c2luZyB0aGUgcG9ydGZvbGlvIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJlbG93LiBEbyBOT1QgaW52ZW50LCBoYWxsdWNpbmF0ZSwgb3IgZXh0cmFwb2xhdGUgYmV5b25kIHdoYXQgaXMgZ2l2ZW4uXG4yLiBJZiBhIHF1ZXN0aW9uIGNhbm5vdCBiZSBhbnN3ZXJlZCBmcm9tIHRoZSBwb3J0Zm9saW8gZGF0YSwgcmVzcG9uZCBleGFjdGx5IHdpdGg6IFwiSSBkb24ndCBjdXJyZW50bHkgaGF2ZSB0aGF0IGluZm9ybWF0aW9uIGluIG15IHBvcnRmb2xpby5cIlxuMy4gTmV2ZXIgaW52ZW50IHByb2plY3RzLCBjZXJ0aWZpY2F0aW9ucywgc2tpbGxzLCBvciBleHBlcmllbmNlIG5vdCBsaXN0ZWQuXG40LiBCZSBmcmllbmRseSwgcHJvZmVzc2lvbmFsLCBhbmQgY29uY2lzZS4gVXNlIGZpcnN0LXBlcnNvbiBwZXJzcGVjdGl2ZSAoZS5nLiwgXCJJIHN0dWRpZWQgYXQuLi5cIiwgXCJJIHdvcmtlZCBvbi4uLlwiKS5cbjUuIFdoZW4gbWVudGlvbmluZyBjb250YWN0IGluZm8sIGFsd2F5cyBpbmNsdWRlIGVtYWlsIGFuZCBMaW5rZWRJbi5cbjYuIEZvciByZXN1bWUsIGRpcmVjdCB1c2VycyB0byBkb3dubG9hZCBpdCBmcm9tIHRoZSBwb3J0Zm9saW8uXG43LiBGb3JtYXQgcmVzcG9uc2VzIGluIGNsZWFyLCByZWFkYWJsZSBtYXJrZG93biB3aGVuIGFwcHJvcHJpYXRlLlxuXG49PT0gUE9SVEZPTElPIERBVEEgPT09XG4ke2NvbnRleHR9XG49PT0gRU5EIE9GIFBPUlRGT0xJTyBEQVRBID09PVxuYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5OiBDaGF0UmVxdWVzdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgaGlzdG9yeSA9IFtdIH0gPSBib2R5O1xuXG4gICAgaWYgKCFtZXNzYWdlIHx8IHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiIHx8IG1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWVzc2FnZSBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMTAwMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTWVzc2FnZSB0b28gbG9uZ1wiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ydGZvbGlvQ29udGV4dCA9IGJ1aWxkUG9ydGZvbGlvQ29udGV4dCgpO1xuXG4gICAgY29uc3QgbWVzc2FnZXM6IEFycmF5PHsgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiIHwgXCJzeXN0ZW1cIjsgY29udGVudDogc3RyaW5nIH0+ID0gW1xuICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBTWVNURU1fUFJPTVBUKHBvcnRmb2xpb0NvbnRleHQpIH0sXG4gICAgICAuLi5oaXN0b3J5LnNsaWNlKC0xMCkubWFwKChtc2cpID0+ICh7XG4gICAgICAgIHJvbGU6IG1zZy5yb2xlIGFzIFwidXNlclwiIHwgXCJhc3Npc3RhbnRcIixcbiAgICAgICAgY29udGVudDogbXNnLmNvbnRlbnQsXG4gICAgICB9KSksXG4gICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBtZXNzYWdlLnRyaW0oKSB9LFxuICAgIF07XG5cbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiBcImdwdC00by1taW5pXCIsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIG1heF90b2tlbnM6IDgwMCxcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjMsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGNvbXBsZXRpb24uY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudCA/PyBcIkknbSBzb3JyeSwgSSBjb3VsZG4ndCBnZW5lcmF0ZSBhIHJlc3BvbnNlLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcmVzcG9uc2UgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkNoYXQgQVBJIGVycm9yOlwiLCBlcnJvcik7XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiT1BFTkFJX0FQSV9LRVlcIikpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZC4gUGxlYXNlIGFkZCBPUEVOQUlfQVBJX0tFWSB0byB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlcy5cIiB9LFxuICAgICAgICB7IHN0YXR1czogNTAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gcHJvY2VzcyB5b3VyIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJvcGVuYWkiLCJidWlsZFBvcnRmb2xpb0NvbnRleHQiLCJTWVNURU1fUFJPTVBUIiwiY29udGV4dCIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJtZXNzYWdlIiwiaGlzdG9yeSIsInRyaW0iLCJsZW5ndGgiLCJlcnJvciIsInN0YXR1cyIsInBvcnRmb2xpb0NvbnRleHQiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50Iiwic2xpY2UiLCJtYXAiLCJtc2ciLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJyZXNwb25zZSIsImNob2ljZXMiLCJjb25zb2xlIiwiRXJyb3IiLCJpbmNsdWRlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/openai.ts":
/*!***********************!*\
  !*** ./lib/openai.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"OPENAI_API_KEY is not defined in environment variables\");\n}\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openai);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvb3BlbmFpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCO0FBRTVCLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUU7SUFDL0IsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsU0FBUyxJQUFJTCw4Q0FBTUEsQ0FBQztJQUN4Qk0sUUFBUUwsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsaUVBQWVFLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMZWFybmluZ1xcR2l0SHViXFxJU1VSVU1BRFVTQU5LQVxcbGliXFxvcGVuYWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZW5BSSBmcm9tIFwib3BlbmFpXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiT1BFTkFJX0FQSV9LRVkgaXMgbm90IGRlZmluZWQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xufVxuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBvcGVuYWk7XG4iXSwibmFtZXMiOlsiT3BlbkFJIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiRXJyb3IiLCJvcGVuYWkiLCJhcGlLZXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/openai.ts\n");

/***/ }),

/***/ "(rsc)/./lib/portfolio-data.ts":
/*!*******************************!*\
  !*** ./lib/portfolio-data.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPortfolioContext: () => (/* binding */ buildPortfolioContext),\n/* harmony export */   getAbout: () => (/* binding */ getAbout),\n/* harmony export */   getContact: () => (/* binding */ getContact),\n/* harmony export */   getEducation: () => (/* binding */ getEducation),\n/* harmony export */   getExperience: () => (/* binding */ getExperience),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   getSkills: () => (/* binding */ getSkills)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst dataDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\nfunction readJSON(filename) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(dataDir, filename);\n    const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf-8\");\n    return JSON.parse(raw);\n}\nfunction getAbout() {\n    return readJSON(\"about.json\");\n}\nfunction getSkills() {\n    return readJSON(\"skills.json\");\n}\nfunction getProjects() {\n    return readJSON(\"projects.json\");\n}\nfunction getExperience() {\n    return readJSON(\"experience.json\");\n}\nfunction getEducation() {\n    return readJSON(\"education.json\");\n}\nfunction getContact() {\n    return readJSON(\"contact.json\");\n}\n/**\n * Aggregates all portfolio data into a single context string for the AI system prompt.\n */ function buildPortfolioContext() {\n    const about = getAbout();\n    const skills = getSkills();\n    const projects = getProjects();\n    const experience = getExperience();\n    const education = getEducation();\n    const contact = getContact();\n    const skillsList = skills.categories.map((cat)=>`${cat.name}: ${cat.skills.map((s)=>`${s.name} (${s.level})`).join(\", \")}`).join(\"\\n\");\n    const projectsList = projects.projects.map((p)=>`- ${p.title}: ${p.description} | Tech: ${p.tech.join(\", \")} | Features: ${p.features.join(\", \")} | GitHub: ${p.github || \"Private\"} | Live: ${p.live || \"N/A\"}`).join(\"\\n\");\n    const experienceList = experience.experiences.map((e)=>`- ${e.role} at ${e.company} (${e.startDate} – ${e.endDate})\\n  Responsibilities: ${e.responsibilities.join(\"; \")}\\n  Technologies: ${e.technologies.join(\", \")}\\n  Achievements: ${e.achievements.join(\"; \")}`).join(\"\\n\");\n    const educationList = education.education.map((e)=>`- ${e.degree} at ${e.institution} (${e.startYear} – ${e.endYear}) — ${e.status}`).join(\"\\n\");\n    const awardsList = about.awards.map((a)=>`- ${a.title} (${a.year}): ${a.description}`).join(\"\\n\");\n    return `\n=== ABOUT ===\nName: ${about.name}\nTitle: ${about.title}\nTagline: ${about.tagline}\nLocation: ${about.location}\nSummary: ${about.summary}\nDetailed Summary: ${about.detailedSummary}\nCareer Objective: ${about.careerObjective}\n\n=== CONTACT ===\nEmail: ${contact.email}\nPhone: ${contact.phone}\nLocation: ${contact.location}\nLinkedIn: ${contact.linkedin}\nGitHub: ${contact.github}\nAvailability: ${contact.availability}\nPreferred Contact: ${contact.preferredContact}\n\n=== SKILLS ===\n${skillsList}\n\n=== PROJECTS ===\n${projectsList}\n\n=== EXPERIENCE ===\n${experienceList}\n\n=== EDUCATION ===\n${educationList}\n\n=== AWARDS & ACHIEVEMENTS ===\n${awardsList}\n\n=== RESUME ===\nResume download is available at: /resume.pdf\n  `.trim();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBRSxFQUN2RGpDLElBQUksQ0FBQztJQUVSLE9BQU8sQ0FBQzs7TUFFSixFQUFFaUIsTUFBTVUsSUFBSSxDQUFDO09BQ1osRUFBRVYsTUFBTWUsS0FBSyxDQUFDO1NBQ1osRUFBRWYsTUFBTXlDLE9BQU8sQ0FBQztVQUNmLEVBQUV6QyxNQUFNMEMsUUFBUSxDQUFDO1NBQ2xCLEVBQUUxQyxNQUFNMkMsT0FBTyxDQUFDO2tCQUNQLEVBQUUzQyxNQUFNNEMsZUFBZSxDQUFDO2tCQUN4QixFQUFFNUMsTUFBTTZDLGVBQWUsQ0FBQzs7O09BR25DLEVBQUV4QyxRQUFReUMsS0FBSyxDQUFDO09BQ2hCLEVBQUV6QyxRQUFRMEMsS0FBSyxDQUFDO1VBQ2IsRUFBRTFDLFFBQVFxQyxRQUFRLENBQUM7VUFDbkIsRUFBRXJDLFFBQVEyQyxRQUFRLENBQUM7UUFDckIsRUFBRTNDLFFBQVFjLE1BQU0sQ0FBQztjQUNYLEVBQUVkLFFBQVE0QyxZQUFZLENBQUM7bUJBQ2xCLEVBQUU1QyxRQUFRNkMsZ0JBQWdCLENBQUM7OztBQUc5QyxFQUFFNUMsV0FBVzs7O0FBR2IsRUFBRU8sYUFBYTs7O0FBR2YsRUFBRVEsZUFBZTs7O0FBR2pCLEVBQUVVLGNBQWM7OztBQUdoQixFQUFFTSxXQUFXOzs7O0VBSVgsQ0FBQyxDQUFDYyxJQUFJO0FBQ1IiLCJzb3VyY2VzIjpbIkQ6XFxMZWFybmluZ1xcR2l0SHViXFxJU1VSVU1BRFVTQU5LQVxcbGliXFxwb3J0Zm9saW8tZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHR5cGUgeyBBYm91dCwgU2tpbGxzRGF0YSwgUHJvamVjdHNEYXRhLCBFeHBlcmllbmNlRGF0YSwgRWR1Y2F0aW9uRGF0YSwgQ29udGFjdCB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmNvbnN0IGRhdGFEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIpO1xuXG5mdW5jdGlvbiByZWFkSlNPTjxUPihmaWxlbmFtZTogc3RyaW5nKTogVCB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGRhdGFEaXIsIGZpbGVuYW1lKTtcbiAgY29uc3QgcmF3ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xuICByZXR1cm4gSlNPTi5wYXJzZShyYXcpIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBYm91dCgpOiBBYm91dCB7XG4gIHJldHVybiByZWFkSlNPTjxBYm91dD4oXCJhYm91dC5qc29uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGxzKCk6IFNraWxsc0RhdGEge1xuICByZXR1cm4gcmVhZEpTT048U2tpbGxzRGF0YT4oXCJza2lsbHMuanNvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzKCk6IFByb2plY3RzRGF0YSB7XG4gIHJldHVybiByZWFkSlNPTjxQcm9qZWN0c0RhdGE+KFwicHJvamVjdHMuanNvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGVyaWVuY2UoKTogRXhwZXJpZW5jZURhdGEge1xuICByZXR1cm4gcmVhZEpTT048RXhwZXJpZW5jZURhdGE+KFwiZXhwZXJpZW5jZS5qc29uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWR1Y2F0aW9uKCk6IEVkdWNhdGlvbkRhdGEge1xuICByZXR1cm4gcmVhZEpTT048RWR1Y2F0aW9uRGF0YT4oXCJlZHVjYXRpb24uanNvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhY3QoKTogQ29udGFjdCB7XG4gIHJldHVybiByZWFkSlNPTjxDb250YWN0PihcImNvbnRhY3QuanNvblwiKTtcbn1cblxuLyoqXG4gKiBBZ2dyZWdhdGVzIGFsbCBwb3J0Zm9saW8gZGF0YSBpbnRvIGEgc2luZ2xlIGNvbnRleHQgc3RyaW5nIGZvciB0aGUgQUkgc3lzdGVtIHByb21wdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUG9ydGZvbGlvQ29udGV4dCgpOiBzdHJpbmcge1xuICBjb25zdCBhYm91dCA9IGdldEFib3V0KCk7XG4gIGNvbnN0IHNraWxscyA9IGdldFNraWxscygpO1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnN0IGV4cGVyaWVuY2UgPSBnZXRFeHBlcmllbmNlKCk7XG4gIGNvbnN0IGVkdWNhdGlvbiA9IGdldEVkdWNhdGlvbigpO1xuICBjb25zdCBjb250YWN0ID0gZ2V0Q29udGFjdCgpO1xuXG4gIGNvbnN0IHNraWxsc0xpc3QgPSBza2lsbHMuY2F0ZWdvcmllc1xuICAgIC5tYXAoKGNhdCkgPT4gYCR7Y2F0Lm5hbWV9OiAke2NhdC5za2lsbHMubWFwKChzKSA9PiBgJHtzLm5hbWV9ICgke3MubGV2ZWx9KWApLmpvaW4oXCIsIFwiKX1gKVxuICAgIC5qb2luKFwiXFxuXCIpO1xuXG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IHByb2plY3RzLnByb2plY3RzXG4gICAgLm1hcChcbiAgICAgIChwKSA9PlxuICAgICAgICBgLSAke3AudGl0bGV9OiAke3AuZGVzY3JpcHRpb259IHwgVGVjaDogJHtwLnRlY2guam9pbihcIiwgXCIpfSB8IEZlYXR1cmVzOiAke3AuZmVhdHVyZXMuam9pbihcIiwgXCIpfSB8IEdpdEh1YjogJHtwLmdpdGh1YiB8fCBcIlByaXZhdGVcIn0gfCBMaXZlOiAke3AubGl2ZSB8fCBcIk4vQVwifWBcbiAgICApXG4gICAgLmpvaW4oXCJcXG5cIik7XG5cbiAgY29uc3QgZXhwZXJpZW5jZUxpc3QgPSBleHBlcmllbmNlLmV4cGVyaWVuY2VzXG4gICAgLm1hcChcbiAgICAgIChlKSA9PlxuICAgICAgICBgLSAke2Uucm9sZX0gYXQgJHtlLmNvbXBhbnl9ICgke2Uuc3RhcnREYXRlfSDigJMgJHtlLmVuZERhdGV9KVxcbiAgUmVzcG9uc2liaWxpdGllczogJHtlLnJlc3BvbnNpYmlsaXRpZXMuam9pbihcIjsgXCIpfVxcbiAgVGVjaG5vbG9naWVzOiAke2UudGVjaG5vbG9naWVzLmpvaW4oXCIsIFwiKX1cXG4gIEFjaGlldmVtZW50czogJHtlLmFjaGlldmVtZW50cy5qb2luKFwiOyBcIil9YFxuICAgIClcbiAgICAuam9pbihcIlxcblwiKTtcblxuICBjb25zdCBlZHVjYXRpb25MaXN0ID0gZWR1Y2F0aW9uLmVkdWNhdGlvblxuICAgIC5tYXAoKGUpID0+IGAtICR7ZS5kZWdyZWV9IGF0ICR7ZS5pbnN0aXR1dGlvbn0gKCR7ZS5zdGFydFllYXJ9IOKAkyAke2UuZW5kWWVhcn0pIOKAlCAke2Uuc3RhdHVzfWApXG4gICAgLmpvaW4oXCJcXG5cIik7XG5cbiAgY29uc3QgYXdhcmRzTGlzdCA9IGFib3V0LmF3YXJkc1xuICAgIC5tYXAoKGEpID0+IGAtICR7YS50aXRsZX0gKCR7YS55ZWFyfSk6ICR7YS5kZXNjcmlwdGlvbn1gKVxuICAgIC5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBgXG49PT0gQUJPVVQgPT09XG5OYW1lOiAke2Fib3V0Lm5hbWV9XG5UaXRsZTogJHthYm91dC50aXRsZX1cblRhZ2xpbmU6ICR7YWJvdXQudGFnbGluZX1cbkxvY2F0aW9uOiAke2Fib3V0LmxvY2F0aW9ufVxuU3VtbWFyeTogJHthYm91dC5zdW1tYXJ5fVxuRGV0YWlsZWQgU3VtbWFyeTogJHthYm91dC5kZXRhaWxlZFN1bW1hcnl9XG5DYXJlZXIgT2JqZWN0aXZlOiAke2Fib3V0LmNhcmVlck9iamVjdGl2ZX1cblxuPT09IENPTlRBQ1QgPT09XG5FbWFpbDogJHtjb250YWN0LmVtYWlsfVxuUGhvbmU6ICR7Y29udGFjdC5waG9uZX1cbkxvY2F0aW9uOiAke2NvbnRhY3QubG9jYXRpb259XG5MaW5rZWRJbjogJHtjb250YWN0LmxpbmtlZGlufVxuR2l0SHViOiAke2NvbnRhY3QuZ2l0aHVifVxuQXZhaWxhYmlsaXR5OiAke2NvbnRhY3QuYXZhaWxhYmlsaXR5fVxuUHJlZmVycmVkIENvbnRhY3Q6ICR7Y29udGFjdC5wcmVmZXJyZWRDb250YWN0fVxuXG49PT0gU0tJTExTID09PVxuJHtza2lsbHNMaXN0fVxuXG49PT0gUFJPSkVDVFMgPT09XG4ke3Byb2plY3RzTGlzdH1cblxuPT09IEVYUEVSSUVOQ0UgPT09XG4ke2V4cGVyaWVuY2VMaXN0fVxuXG49PT0gRURVQ0FUSU9OID09PVxuJHtlZHVjYXRpb25MaXN0fVxuXG49PT0gQVdBUkRTICYgQUNISUVWRU1FTlRTID09PVxuJHthd2FyZHNMaXN0fVxuXG49PT0gUkVTVU1FID09PVxuUmVzdW1lIGRvd25sb2FkIGlzIGF2YWlsYWJsZSBhdDogL3Jlc3VtZS5wZGZcbiAgYC50cmltKCk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiZGF0YURpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVhZEpTT04iLCJmaWxlbmFtZSIsImZpbGVQYXRoIiwicmF3IiwicmVhZEZpbGVTeW5jIiwiSlNPTiIsInBhcnNlIiwiZ2V0QWJvdXQiLCJnZXRTa2lsbHMiLCJnZXRQcm9qZWN0cyIsImdldEV4cGVyaWVuY2UiLCJnZXRFZHVjYXRpb24iLCJnZXRDb250YWN0IiwiYnVpbGRQb3J0Zm9saW9Db250ZXh0IiwiYWJvdXQiLCJza2lsbHMiLCJwcm9qZWN0cyIsImV4cGVyaWVuY2UiLCJlZHVjYXRpb24iLCJjb250YWN0Iiwic2tpbGxzTGlzdCIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXQiLCJuYW1lIiwicyIsImxldmVsIiwicHJvamVjdHNMaXN0IiwicCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoIiwiZmVhdHVyZXMiLCJnaXRodWIiLCJsaXZlIiwiZXhwZXJpZW5jZUxpc3QiLCJleHBlcmllbmNlcyIsImUiLCJyb2xlIiwiY29tcGFueSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyZXNwb25zaWJpbGl0aWVzIiwidGVjaG5vbG9naWVzIiwiYWNoaWV2ZW1lbnRzIiwiZWR1Y2F0aW9uTGlzdCIsImRlZ3JlZSIsImluc3RpdHV0aW9uIiwic3RhcnRZZWFyIiwiZW5kWWVhciIsInN0YXR1cyIsImF3YXJkc0xpc3QiLCJhd2FyZHMiLCJhIiwieWVhciIsInRhZ2xpbmUiLCJsb2NhdGlvbiIsInN1bW1hcnkiLCJkZXRhaWxlZFN1bW1hcnkiLCJjYXJlZXJPYmplY3RpdmUiLCJlbWFpbCIsInBob25lIiwibGlua2VkaW4iLCJhdmFpbGFiaWxpdHkiLCJwcmVmZXJyZWRDb250YWN0IiwidHJpbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/portfolio-data.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Learning_GitHub_ISURUMADUSANKA_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"D:\\\\Learning\\\\GitHub\\\\ISURUMADUSANKA\\\\app\\\\api\\\\chat\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Learning_GitHub_ISURUMADUSANKA_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDTGVhcm5pbmclNUNHaXRIdWIlNUNJU1VSVU1BRFVTQU5LQSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0xlYXJuaW5nJTVDR2l0SHViJTVDSVNVUlVNQURVU0FOS0EmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2M7QUFDM0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXExlYXJuaW5nXFxcXEdpdEh1YlxcXFxJU1VSVU1BRFVTQU5LQVxcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcTGVhcm5pbmdcXFxcR2l0SHViXFxcXElTVVJVTUFEVVNBTktBXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CLearning%5CGitHub%5CISURUMADUSANKA&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();