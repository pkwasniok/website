---
draft: true
publicationDate: 2024-06-24
title: "Building IMU: Talking to ICM20948 - Part 0"
author: "Patryk Kwaśniok"
description: "First episode of series in which I'll do me best to figure out how to use ICM20948 sensor. This episode is about communicating with sensor using I2C and reading accelerometer's data."
---

# Motivation
I decided to start this series while working on software for handling reading and processing of data from [ICM20948](https://invensense.tdk.com/products/motion-tracking/9-axis/icm-20948/) sensor. When I started working on it I felt lost. Altough I knew how to read data from sensor I didn't knew how to transform those random bytes into actually usable data. I had to watch plent of videos and read even more papers to start connecting the dots. To make sure no one else will ever have to go through that I decided to share my findings with others.

# Introduction
In this episode I'll focus on how to configure and read data from ICM20948 sensor (accelerometer + gyroscope + magnetometer). This episode isn't required for understanding how IMU works and how to build one. You can skip this part and go straight into [part 1](#) if you're using different hardware. As a host device that'll read data from sensor and send them over serial port to PC I'll use AVR128DB28 MCU. 

# Wiring
Before we'll read or write any data to our sensor, first we need to connect it to the MCU. ICM20948 allows you to choose between I2C and ISP connection. In this project we'll use the first one. I won't go into any details on how I2C works, if you want to learn about it, I encourage you to watch [this](https://www.youtube.com/watch?v=_fgWQ3TIhyE&pp=ygUDaTJj) Great Scott's video. Connecting host device to ICM20948 using I2C is fairly easy because it only comes to connecting a total of four wires (VCC, GND, SCL, SDA) according to diagram show below.

```
TODO: Wiring diagram
```

**Please make sure that you haven't messed up any connections (especially power supply) before powering up your circuit. Invalid connections may fry your components.**

# Configuring I2C interface
