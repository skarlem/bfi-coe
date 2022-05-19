#!/bin/bash
TEST2="curl -X PATCH http://localhost:4000/coe/update"
echo $TEST2
RESPONSE=`$TEST2`