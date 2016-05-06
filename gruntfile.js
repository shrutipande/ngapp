module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            templates: {
                files: ['./app/partials/**/*.html', './app/templates/**/*.html'],
                tasks: ['clean:html', 'ngtemplates']
            },
            scripts: {
                files: ['./app/js/**/*.js', '!./app/js/main.min.js'],
                tasks: ['clean:js', 'requirejs']
            },
            styles: {
                files: ['./app/css/**/*.scss'],
                tasks: ['sass']
            }
        },
        ngtemplates: {
            app: {
                cwd: './app',
                src: ['partials/**/*.html', 'templates/**/*.html'],
                dest: './app/js/templates.js',
                options: {
                    bootstrap:  function(module, script) {
                        return 'define([\'angular\', \'app\'], function(angular, app) { app.run([\'$templateCache\', function($templateCache) {' + script + '}]); });';
                    }
                },
                htmlmin: {
                    collapseBooleanAttributes:      true,
                    collapseWhitespace:             true,
                    removeAttributeQuotes:          true,
                    removeComments:                 true,
                    removeEmptyAttributes:          true,
                    removeRedundantAttributes:      true,
                    removeScriptTypeAttributes:     true,
                    removeStyleLinkTypeAttributes:  true
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "./app/js/main.js",
                    name: "main",
                    out: "./app/js/main.concat.js",
                    preserveLicenseComments: false
                }
            }
        },
        sass: {
            options: {
                style: 'compressed'
            },
            prod: {
                src: './app/css/style.scss',
                dest: './app/css/style.min.css'
            }
        },
        imagemin: {
            prod: {
                options: {
                    optimizationLevel: 7,
                    cache: false
                },
                files: [{
                    expand: true,
                    src: ['./app/img/**/*.{png,jpg,gif}'],
                    dest: '.'
                }]
            }
        },
        clean: {
            js: ['app/js/main.min.js'],
            html: ['app/js/templates.js'],
            jsconcat: ['app/js/main.concat.js'],
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'app/css/main.min.css': ['app/css/style.css']
            }
          }
      },
      uglify: {
        options: {
          mangle: false,
          compress: {
            drop_console: true
          }
        },
        main: {
          files: {
            "./app/js/main.min.js": ["./app/js/main.concat.js"]
          }
        }
      }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Production mode tasks
    grunt.registerTask('prod', ['sass', 'ngtemplates', 'requirejs', 'imagemin']);

    // Dev mode tasks
    grunt.registerTask('default', ['clean', 'cssmin', 'ngtemplates', 'requirejs', 'uglify', 'clean:jsconcat', 'watch']);

};
