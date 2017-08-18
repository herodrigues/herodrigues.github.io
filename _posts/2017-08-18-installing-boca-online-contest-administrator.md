---
layout: post
section-type: post
title: Installing BOCA Online Contest Administrator
category: shell
---

In this tutorial, I'll show you how to install the [BOCA system](https://github.com/cassiopc/boca). The installation was tested with Debian 8 and Ubuntu 14.04. This is a step-by-step installation, which is **NOT** ideal for the official Maratona de Programação contest.

Requirements
------------
The system was tested with:
* postgresql 9.4
* apache 2.2
* php 5.6

*Note*: The symbol $ means that you have to execute the commands in a terminal.

Installation
------------
Usually that is true if you have installed the following Ubuntu/Debian packages, as given by an apt-get example line:

```bash
$ sudo apt-get install postgresql postgresql-contrib postgresql-client apache2
$ sudo apt-get install libapache2-mod-php5 php5 php5-cli php5-cgi php5-gd php5-mcrypt php5-pgsql
```

Configuration
-------------

Create the file /etc/apache2/conf-enabled/boca.conf

```
<Directory /var/www/html/boca>
       AllowOverride Options AuthConfig Limit
       Order Allow,Deny
       Allow from all
       AddDefaultCharset utf-8
</Directory>
<Directory /var/www/html/boca/src/private>
       AllowOverride None
       Deny from all
</Directory>
<Directory /var/www/html/boca/doc>
       AllowOverride None
       Deny from all
</Directory>
<Directory /var/www/html/boca/tools>
       AllowOverride None
       Deny from all
</Directory>
```

Create the file /etc/postgresql/*/main/postgresql.conf, where * is your postgresql version number (e.g. 9.4)

```
tcpip_socket = true #if using tcp to connect to database (older postgresqls)
listen_addresses = '*' #newer postgresqls

# THE FOLLOWING MAY BE GOOD FOR PERFORMANCE
max_connections = 100
maintenance_work_mem = 32MB
shared_buffers = 512MB      ## USE AROUND 1/3 OF YOUR RAM
work_mem = 10MB
effective_cache_size = 512MB     ## USE AROUND 1/3 OF YOUR RAM
```

Steps for installing BOCA:
-------------

- Download BOCA [here](http://www.ime.usp.br/~cassio/boca/) and unpack it into a internet world readable directory, according to the setting you chose in /etc/apache2/conf-enabled/boca.conf

```bash
$ cd /var/www/html
$ tar xvzf boca-x.y.z.tar.gz
$ ln -s boca-x.y.z boca
```

_x.y.z is the BOCA version you just downloaded it_

- Set the postgres password

```bash
$ sudo -u postgres psql
ALTER USER postgres WITH PASSWORD 'your_password';
\q
```

- Create a postgresql account with permission to create new databases
```psql
$ psql -h 127.0.0.1 -U postgres -d template1
template1=# create user bocauser with password 'boca' createdb;
template1=# \q
```

- Edit the file src/private/conf.php (placed where you unpacked boca),  in order to set up the correct values for your system. E.g.

```php
  $conf["dblocal"]="false"; // use unix socket to connect?
  $conf["dbhost"]="localhost"; // ip address of the db
  $conf["dbname"]="bocadb"; // name of the boca database
  $conf["dbuser"]="bocauser"; // unpriviligied boca user
  $conf["dbpass"]="boca";     // unpriviligied boca password
  $conf["dbsuperuser"]="bocauser"; // priviligied boca user
  $conf["dbsuperpass"]="boca";	   // priviligied boca password
       // note that it is just fine to use the same user for
       // unpriv and priv access

  // secret key to be used in HTTP headers
  // you MUST set it with any random large enough sequence
  // DONT LEAVE IT AS YOU GOT WHEN UNPACKED THE SOFTWARE
  // CHOOSE ANOTHER NUMBER/STRING AND REPLACE BELOW
  $conf["key"]="secretKey:23894091237589234759234723489";

  // initial password that is used for the user admin -- set it
  // to something hard to guess if the server is available
  // online even in the moment you are creating the contest
  // In this way, the new accounts for system and admin that are
  // eventually created come already with the password set to this
  // value. It is your task later to update these passwords to
  // some other values within the BOCA web interface.
  $conf["basepass"]="boca";

  // the following field is used by the autojudging script
  // set it with IP address (or other short description)
  // of the computer allocated for
  // autojudging during the competition
  // this is only useful for debug purposes when multiple
  // autojudges are being used
  $conf["ip"]='local';
```

- Run the php script to initialize the boca database. E.g.
```bash
$ cd /var/www/html/boca/src
$ sudo php private/createdb.php
```

- Check your lsb-release
```bash
$ cat /etc/lsb-release
```

You should get something like:
```
DISTRIB_CODENAME=jessie
```

If you get nothing, install and check lsb-release:
```bash
$ sudo apt-get install lsb-release
$ lsb-release -da
```

You should get something similar to this
```
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 8.4 (jessie)
Release:	8.4
Codename:	jessie
```

Then, create the file /etc/lsb-release and put the line ```DISTRIB_CODENAME=codename```, where codename is the distro codename you got in the the previous step.

- Create the bocajail enviroment
```bash
$ sudo apt-get install quota debootstrap schroot
$ cd /var/www/html/boca/tools/etc/icpc
$ sudo ./createbocajail.sh
```

This will take several minutes. After that, it's all done.
Now you have to manage the contest with a browser and boca. Proceed to the ADMIN.TXT file.
