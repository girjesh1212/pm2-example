# How to start 
- Clone the repository
- Run the command npm install in root directory of this project to install dependencies
- See the scripts in package.json file to start/restart/stop/delete the server from pm2.

# Installing pm2
pm2 is installed globally hence you need to install it once using the command **npm install pm2 -g**

# Routes
There is only one route to test whether the server is working.
http://localhost:3000


# Other pm2 commands 
Some useful pm2 commands other than mentioned in the package.json script are:

## Logs
Console logs can be seen using the command **pm2 logs** 

## Monitoring
Live monitoring can be seen using the command **pm2 monit**
