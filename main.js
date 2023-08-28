// import Mirador from "./node_modules/mirador/dist/mirador.min.js";
// import { viewer } from "./node_modules/mirador/dist/mirador.min.js";
// import * as Mirador from "./node_modules/mirador/dist/mirador.min.js";

Mirador.viewer({
	id: "mirador",
	windows: [
		{
			manifestId: "https://wellcomelibrary.org/iiif/b18035723/manifest",

			// "https://www.e-rara.ch/i3f/v20/6069569/manifest",
		},
	],
});
