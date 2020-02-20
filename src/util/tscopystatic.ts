  
import * as shell from "shelljs";

shell.cp("-R", "src/public/*.html", "dist/public/");
shell.cp("-R", "src/public/*.css", "dist/public/");
shell.cp("", "src/server.js", "dist/");
// shell.cp("-R", "src/public/fonts", "dist/public/");
// shell.cp("-R", "src/public/images", "dist/public/");