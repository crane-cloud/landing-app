#!/bin/bash

set -e

# env variables
NEXT_PUBLIC_CURRENT_APP_URL="${NEXT_PUBLIC_CURRENT_APP_URL}"
NEXT_PUBLIC_APP_URL="${NEXT_PUBLIC_APP_URL}"

function create_env_file
{
    echo NEXT_PUBLIC_CURRENT_APP_URL=$NEXT_PUBLIC_CURRENT_APP_URL >> .env
    echo NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL >> .env
}


function run
{
    create_env_file
}

run