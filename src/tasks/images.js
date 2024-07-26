import imagemin from "gulp-imagemin"

export const images = ()=>{
    return app.gulp.src(app.path.src.images, {sourcemaps:true})
    .pipe(app.plugins.newer(app.path.build.images))
    // .pipe(imagemin({
    //     progressive: true,
    //     interlaced: true,
    //     optimizationLevel: 3
    // }))
    .pipe(app.gulp.dest(app.path.build.images))
}