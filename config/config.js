module.exports = {

  server: {
    port: process.env.PORT || 8080,
    ip: process.env.IP || '0.0.0.0',
  },
  //List of microservices that offer games
  gameMicroservices: ['http://charades-movie-master-01-1.retruclabs.cont.tutum.io:8042'],

  gameAboutList :[],

  logFilePath: (process.env.HOME || process.env.USERPROFILE) + '/node-logs.log',

  currentTimeZone: 'Europe/Madrid',

  filmsListDefaultLength: 5
};
