module.exports = {
  apps: [{
    name: 'pm2-server',
    script: 'server.js',
    instances: 'MAX',
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
