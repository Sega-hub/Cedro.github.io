import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = ()=>{
    return app.gulp.src(app.path.src.scss, {sourcemaps:true})

    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascade: true
    }))
    //Расскоментить если нужно будет глянуть в файлик не сжатый
    //.pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(app.plugins.replace(/@img\//g, '../../public/'))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
}