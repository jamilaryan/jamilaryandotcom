module.exports = {
  apps: [{
    name: 'jamilaryandotcom',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-57-36.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/secgroup.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jamilaryan/jamilaryandotcom.git',
      path: '/home/ubuntu/jamilaryandotcom',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
