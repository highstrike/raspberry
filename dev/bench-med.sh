#!/bin/bash

for f in {1..7}
do
	vcgencmd measure_temp
	sysbench --test=cpu --cpu-max-prime=25000 --num-threads=2 run >/dev/null 2>&1
done
vcgencmd measure_temp
