/**
 * Created by dbuarque on 1/24/16.
 */

module.exports = function (cli) {

    cli
        .command('install <module>')
        .description('Installs a Vorpal extension in realtime.')
        .option('-l, --loglevel', 'Sets log level of module install')
        .action(function (args, cb) {
            var self = this;
            console.log('eaaa');
            cb();
        });
};