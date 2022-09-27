#!/bin/bash

die () {
    echo >&2 "$@"
    exit 1
}

[ "$#" -eq 1 ] || die "1 argument required, bucket name. $# provided."


# Set bucket, region and profile for aws cli
bucket=$1;
region="eu-west-1"
profile="s3deploy"

# Create a new file policy.json in current directory containing a "public read all" policy for the new bucket
sed 's/__BUCKET__/'$bucket'/g' ./policy-template.json > policy.json


# Create the bucket
aws s3 mb s3://$bucket --region $region --profile $profile

# Wait for a moment
echo "Bucket created, about to set policy..."
sleep 1;

# Assign our fresh policy.json to the new bucket, making everyting that goes into it publically readable.
aws s3api put-bucket-policy --bucket $bucket --policy file://policy.json --profile $profile --region $region

# Enable static website hosting so the contents become available at "http://$bucket.s3-website-$region.amazonaws.com/"
aws s3 website s3://$bucket/ --index-document index.html --error-document index.html --profile $profile --region $region

# Upload a test file so we can see everything is up and running.
aws s3 cp ./index.html s3://$bucket/index.html --profile $profile --region $region


echo "Done. Your bucket is ready at"
echo "http://$bucket.s3-website-$region.amazonaws.com/"

