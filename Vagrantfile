# encoding: utf-8

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.ssh.forward_agent = true
  
  config.vm.network :forwarded_port, host: 8000, guest: 80
  config.vm.synced_folder "public/", "/var/www"

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks"]
    chef.add_recipe :apt
    chef.add_recipe 'git'
    chef.add_recipe 'apache2'
    chef.add_recipe 'redis'
    chef.add_recipe 'php'
    chef.add_recipe 'vim'
    chef.add_recipe 'apache2::mod_php5'
    chef.json = {
      :git    => {
        :prefix => "/usr/local"
      },
      :apache => {
        :default_site_enabled => "true",
        :dir                  => "/etc/apache2",
        :log_dir              => "/var/log/apache2",
        :error_log            => "error.log",
        :user                 => "www-data",
        :group                => "www-data",
        :binary               => "/usr/sbin/apache2",
        :cache_dir            => "/var/cache/apache2",
        :pid_file             => "/var/run/apache2.pid",
        :lib_dir              => "/usr/lib/apache2",
        :listen_ports         => [
          "80"
        ],
        :contact              => "ops@example.com",
        :timeout              => "300",
        :keepalive            => "On",
        :keepaliverequests    => "100",
        :keepalivetimeout     => "5"
      },
      :redis  => {
        :bind        => "127.0.0.1",
        :port        => "6379",
        :config_path => "/etc/redis/redis.conf",
        :daemonize   => "yes",
        :timeout     => "300",
        :loglevel    => "notice"
      }
    }
  end
end
