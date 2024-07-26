import gulp from "gulp";
import { path } from "./src/config/path.js";
import { plugins } from "./src/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins

}

import { copy } from "./src/tasks/copy.js";
import {deletedPaths} from './src/tasks/reset.js';
import { html } from "./src/tasks/html.js";
import { scss } from "./src/tasks/scss.js";
import {js} from "./src/tasks/js.js";
import {images} from "./src/tasks/images.js";

function watcher(){
  gulp.watch(path.watch.files,copy);
  gulp.watch(path.watch.html,html);
  gulp.watch(path.watch.scss,scss);
  gulp.watch(path.watch.js,js);
  gulp.watch(path.watch.images,images);
}

const mainTaks = gulp.parallel(copy, html, scss, js, images);

const dev = gulp.series(deletedPaths, mainTaks, watcher);

gulp.task('default', dev);