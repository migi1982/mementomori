gulp = require 'gulp'
jade = require 'gulp-jade'
sass = require 'gulp-sass'
autoprefixer = require 'gulp-autoprefixer'
coffee = require 'gulp-coffee'
coffeelint = require 'gulp-coffeelint'
sync = require 'browser-sync'
jsonlint = require 'gulp-jsonlint'
spritesmith = require 'gulp.spritesmith'

baseDir = './build/'

# static server
gulp.task 'server', ->
  console.log '---------- server task ----------'
  sync
    server:
      baseDir: baseDir
    port: 3000
    browser: 'Google Chrome'
    notify: true
    reloadDelay: 1000

# reload
gulp.task 'reload', ->
  sync.reload()

# sprite
gulp.task 'sprite', ->
  spriteDataIcon = gulp.src('src/assets/sprite/icon/*.png')
    .pipe spritesmith {
      imgName: 'icon.png'
      cssName: '_sprite_icon.scss'
      imgPath: '../images/icon/icon.png'
      cssFormat: 'scss'
      cssVarMap: (sprite)->
        sprite.name = 'sprite-' + sprite.name
        return
    }
  spriteDataIcon.img.pipe gulp.dest 'src/assets/images/icon/'
  spriteDataIcon.css.pipe gulp.dest 'src/assets/sass/'
  return

# sass
gulp.task 'sass', ->
  console.log '---------- sass task ----------'
  gulp.src 'src/assets/sass/main.scss'
    .pipe sass()
    .pipe autoprefixer()
    .pipe gulp.dest baseDir + 'css'
  return

# coffee
gulp.task 'coffee', ->
  console.log '---------- coffee task ----------'
  gulp.src 'src/**/*.coffee'
    .pipe coffeelint('node_modules/gulp-coffeelint/node_modules/coffeelint/generated_coffeelint.json')
    .pipe coffeelint.reporter()
    .pipe coffee()
    .pipe gulp.dest baseDir
  return

# jade
gulp.task 'jade', ->
  console.log '---------- jade task ----------'
  gulp.src 'src/**/*.jade'
    .pipe jade()
    .pipe gulp.dest baseDir
  return

# images
gulp.task 'images', ->
  console.log '---------- images task ----------'
  gulp.src 'src/assets/images/**/*'
    .pipe gulp.dest baseDir + 'images/'

# data
gulp.task 'data', ->
  console.log '---------- data task ----------'
  gulp.src 'src/data/*'
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
    .pipe gulp.dest baseDir + 'data'

# lib
gulp.task 'lib', ->
  console.log '---------- lib task ----------'
  gulp.src 'src/assets/lib/*'
    .pipe gulp.dest baseDir + 'lib/'

# watch
gulp.task 'watch', ['server'],->
  console.log '---------- watch task ----------'

  gulp.watch 'src/assets/sass/**/*.scss', ['sass']
  gulp.watch 'src/modules/**/*.coffee', ['coffee']
  gulp.watch 'src/assets/images/*', ['images']
  gulp.watch 'src/modules/**/*.jade', ['jade']
  gulp.watch 'src/index.jade', ['jade']

  # reload
  gulp.watch baseDir + '**/*.html', ['reload']
  gulp.watch baseDir + '**/*.css', ['reload']
  gulp.watch baseDir + '**/*.js', ['reload']

# default
gulp.task 'build', ['sprite','sass','coffee','jade', 'images', 'data', 'lib']
gulp.task 'default', ['watch']