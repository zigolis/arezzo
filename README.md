#Arezzo Challenge

This is the source from Arezzo's challenge.

## Requirements

These are the basic requirements for your application:

* ```node``` v0.10+
* ```npm```  v1.4+

## Installation

First of all, clone this repository:

	git clone git@github.com:zigolis/arezzo.git

After that, enter the folder ```$ cd arezzo``` and execute this line in your directory:

    npm install

And then execute:

    bower install
    
## Build

Execute this line to generate your application:

    gulp build

Also, you can run the commands singly:

    gulp markup
    gulp styles
    gulp scripts
    gulp images
    
Obs. The source will be created on ```/public/``` dir.

## Running (Development)

Execute this line to run your application:

    gulp serve
    
Your app should be running on ```http://0.0.0.0:3000/html/```

## Watch + Sync (Live reload)

You can use a trigger system to code + generate + reload your web server. Execute this line directory:

    gulp
    
After that, you must run gulp serve and activating your live reload plugin at Google Chrome.