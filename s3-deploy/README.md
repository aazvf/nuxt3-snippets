# S3 Deployment


## Create public bucket


- cd to this directory
- edit the contents of `create-bucket.sh` to use your own region and profile for aws cli

    ./create-bucket.sh "your bucket here"

This will

- create `policy.json` in the current directory
- create a new bucket in s3
- assign this policy to the bucket
- enable static website hosting
- upload a test file
- give you the endpoint so you can test it.



## Deploy to that bucket

Add this to package.json

    "deploy": "nuxt generate && aws s3 sync .output/public s3://BUCKET/ --profile s3deploy --delete"

or create a `MakeFile`

    deploy:
        npm run build
        npm run generate
        aws s3 sync .output/public s3://BUCKET/ --profile s3deploy --delete



## Create s3 iam deployment user

- Visit AWS IAM
- Create user
- Attach policy
- Give full s3 permissions
-     (or permissions for specific bucket)














