#Arezzo Challenge

This is the source from Arezzo's challenge.

## Requirements

These are the basic requirements for your application:

* ```node``` v0.10+
* ```npm```  v1.4+

## Installation

First of all, clone this repository:

	git clone git@github.com:zigolis/arezzo.git

After that, execute this line in your application's directory:

    npm install

And then execute:

    bower install
    
## Build

Execute this line to run your application:

    gulp build

Also, you can run the commands singly:

    gulp markup
    gulp styles
    gulp scripts
    gulp images
    
Obs. The source will be created on ```/public/```

## Running (Development)

Execute this line to run your application:

    gulp
    
And then execute:

    gulp serve
    
Your app should be running on ```http://0.0.0.0:3000/html/```