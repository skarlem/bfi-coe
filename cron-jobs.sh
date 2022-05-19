#!/bin/bash

TEST="curl -d '' http://localhost:4000/coe/add"
echo $TEST
RESPONSE=$TEST


TEST2="curl -d '' http://localhost:4000/coe/update"
echo $TEST2
RESPONSE=$TEST2