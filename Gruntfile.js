'use strict';

// Grunt is used to publish the loading screen demo to github
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-build-control');

    var repo = 'git@github.com:gmodcoders/load-seed.git';

    grunt.initConfig({
        buildcontrol: {
            options: {
                dir: 'dist',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'repo',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.registerTask('deploy', ['buildcontrol:pages']);
};
