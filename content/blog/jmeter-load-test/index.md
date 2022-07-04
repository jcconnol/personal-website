---
title: Max out your System With JMeter and Flood.io
date: "2022-03-07T22:12:03.284Z"
description: "JMeter and Flood.io can be used to load test you APIs. Here are some things you need to know before starting."
---

Whether you have a dozen users or hundreds of thousands hitting your system every minute, it is good to know the what kind of load your system can handle. Just doing functional tests might not surface problems that could occur when many users use your product concurrently. Things like memory leaks, cpu usage and response time might be spot on when one request at a time is occurs but with 1000s of users these problems can quickly become apparent. This is the whole point of load testing.


The software situation is kind of like a public bathroom, after a plumber is done setting up 5 toilets, they might go up to each one individually and flush it, see that they all work and be happy about a good days work. After some time goes by, eventually you will have two people just happen To flush at the same time, leading to a real crappy situation that you might be stuck cleaning up.


For load testing, this is where [https://www.flood.io/](Flood.io) can be handy. It allows you to upload and run a script many times per minute to accurately simulate conditions that might be caused by a lot of users using your software. A simple way to test your backend systems, such as APIs, is by using [https://jmeter.apache.org/](JMeter). JMeter is a free tool that allows you to write scripts that make API calls at a specified interval and a certain number of times.  


## JMeter install
1. Download JMeter binary from [https://jmeter.apache.org/download_jmeter.cgi](here). If you have a Mac or Windows get the Zip file.
2. Open your terminal or powershell, go to the directory you downloaded the file to and and run the following command:
```bash
sh ~./apache-jmeter.../jmeter.sh
```
3. The UI for JMeter should now show up.

Note: The UI is not for the actual load test and it might hurt the computer it runs on if you overdo it.


## Single call JMeter script
1. Create call and specify users
2. Make it a post or whatever
3. Qdd way to display results
4. Add headers and other things


## Double call JMeter script
1. Add another api call
2. Put delay in between


## Calculate the number of users and calls


## Setting up Flood.io
1. Make a Flood.io account
2. 

## Putting it in Flood.io
1. Specify the number of users in your script
2. Upload to flood.io
3. Let er rip


## Calculate Flood.io Cost



## Warnings
1. When making your JMeter script, be sure to test it on small numbers of users and check the usage logs of your product to make sure the math is correct. That way when you run it in Flood.io you are not surprised by a large price tag.
   
2. Do not run a JMeter script with a lot of users on a local machine, this might cause your computer to crash. 
   
3. Use as few of users in JMeter and flood.io as possible. I recently racked up a substantial bill by having 2x more users than I needed, charging me twice as much money as was really needed.
   
4. VUH is what flood.io charges for. Be aware how long your test runs.
   
5. Depending on how many users and requests you are going to start out with, just run a small test locally
   
6. Test in a testing environment so you don't take down a production environment if it is live


## Finding the max load of your production system in a testing environment.

1. If your infrastructure runs on docker, as a lot do, you might have a different number of instances running in your production environment than in the test one.
 
2. Make sure the instances can be scaled and that they are scaled off the right metric. If you have a small internal service that does a small bit of validation then the limiting factor for that instance might be throughput rather than cpu usage.
 
3. You database connection limit might not match your request limit. For instance, if you have a service that makes requests to a db, if it can have 200 network connections open but can only have 10 db connections open, if it gets hit with 20 requests then 10 of those will just wait until the db requests finish. This only gets worse the more requests you get.

4. You might find that instances need to communicate between each other in which case scaling might only cause more complexity and therefore make the system slower. This can especially happen with a CMS