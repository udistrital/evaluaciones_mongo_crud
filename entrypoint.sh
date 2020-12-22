#!/usr/bin/env bash

set -e
set -u
set -o pipefail

#exec aws --version

exec node dist/main
