# Storage Service

## Amazon Simple Storage Service (Amazon S3) and Amazon Glacier Storage

### Question 1: In what ways does Amazon Simple Storage Service (Amazon S3) object storage differ from block and file storage? (Choose 2 answers)

- ( A ) Amazon S3 stores data in fixed size blocks.
- ( B ) Objects are identified by a numbered address.
- ( C ) Objects can be any size.
- ( D ) Objects contain both data and metadata.
- ( E ) Objects are stored in buckets.

<details><summary>Answer</summary>
<p>D,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 2: Which of the following are not appropriates use cases for Amazon Simple Storage Service (Amazon S3)? (Choose 2 answers)

- ( A ) Storing web content
- ( B ) Storing a file system mounted to an Amazon Elastic Compute Cloud (Amazon EC2)
  instance
- ( C ) Storing backups for a relational database
- ( D ) Primary storage for a database
- ( E ) Storing logs for analytics

<details><summary>Answer</summary>
<p>B,D</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 3: What are some of the key characteristics of Amazon Simple Storage Service (AmazonS3)? (Choose 3 answers)

- ( A ) All objects have a URL.
- ( B ) Amazon S3 can store unlimited amounts of data.
- ( C ) Objects are world-readable by default.
- ( D ) Amazon S3 uses a REST (Representational State Transfer) Application Program Interface (API).
- ( E ) You must pre-allocate the storage in a bucket.

<details><summary>Answer</summary>
<p>A,B,D</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 4: Which features can be used to restrict access to Amazon Simple Storage Service (AmazonS3) data? (Choose 3 answers)

- ( A ) Enable static website hosting on the bucket.
- ( B ) Create a pre-signed URL for an object.
- ( C ) Use an Amazon S3 Access Control List (ACL) on a bucket or object.
- ( D ) Use a lifecycle policy.
- ( E ) Use an Amazon S3 bucket policy.

<details><summary>Answer</summary>
<p>B,C,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 5: Your application stores critical data in Amazon Simple Storage Service (Amazon S3), which must be protected against inadvertent or intentional deletion. How can this data be protected? (Choose 2 answers)

- ( A ) Use cross-region replication to copy data to another bucket automatically.
- ( B ) Set a vault lock.
- ( C ) Enable versioning on the bucket.
- ( D ) Use a lifecycle policy to migrate data to Amazon Glacier.
- ( E ) Enable MFA Delete on the bucket.

<details><summary>Answer</summary>
<p>C,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 6: Your company stores documents in Amazon Simple Storage Service (Amazon S3), but it wants to minimize cost. Most documents are used actively for only about a month, then much less frequently. However, all data needs to be available within minutes when requested. How can you meet these requirements

- ( A ) Migrate the data to Amazon S3 Reduced Redundancy Storage (RRS) after 30 days.
- ( B ) Migrate the data to Amazon Glacier after 30 days.
- ( C ) Migrate the data to Amazon S3 Standard – Infrequent Access (IA) after 30 days.
- ( D ) Turn on versioning, then migrate the older version to Amazon Glacier.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 7: How is data stored in Amazon Simple Storage Service (Amazon S3) for high durability

- ( A ) Data is automatically replicated to other regions.
- ( B ) Data is automatically replicated within a region.
- ( C ) Data is replicated only if versioning is enabled on the bucket.
- ( D ) Data is automatically backed up on tape and restored if needed.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 8: Based on the following Amazon Simple Storage Service (Amazon S3) URL, which one of the following statements is correct? <https://bucket1.abc.com.s3.amazonaws.com/folderx/myfile.doc>

- ( A ) The object “myfile.doc” is stored in the folder “folderx” in the bucket “bucket1.abc.com.”
- ( B ) The object “myfile.doc” is stored in the bucket “bucket1.abc.com.”
- ( C ) The object “folderx/myfile.doc” is stored in the bucket “bucket1.abc.com.”
- ( D ) The object “myfile.doc” is stored in the bucket “bucket1.”

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 9: To have a record of who accessed your Amazon Simple Storage Service (Amazon S3) data and from where, you should do what

- ( A ) Enable versioning on the bucket.
- ( B ) Enable website hosting on the bucket.
- ( C ) Enable server access logs on the bucket.
- ( D ) Create an AWS Identity and Access Management (IAM) bucket policy.
- ( E ) Enable Amazon CloudWatch logs.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 10: What are some reasons to enable cross-region replication on an Amazon Simple Storage Service (Amazon S3) bucket? (Choose 2 answers)

- ( A ) You want a backup of your data in case of accidental deletion.
- ( B ) You have a set of users or customers who can access the second bucket with lower latency.
- ( C ) For compliance reasons, you need to store data in a location at least 300 miles away from the first region.
- ( D ) Your data needs at least five nines of durability.

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 11: Your company requires that all data sent to external storage be encrypted before being sent. Which Amazon Simple Storage Service (Amazon S3) encryption solution will meet this requirement

- ( A ) Server-Side Encryption (SSE) with AWS-managed keys (SSE-S3)
- ( B ) SSE with customer-provided keys (SSE-C)
- ( C ) Client-side encryption with customer-managed keys
- ( D ) Server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 12: You have a popular web application that accesses data stored in an Amazon Simple Storage Service (Amazon S3) bucket. You expect the access to be very read-intensive, with expected request rates of up to 500 GETs per second from many clients. How can you increase the performance and scalability of Amazon S3 in this case

- ( A ) Turn on cross-region replication to ensure that data is served from multiple locations.
- ( B ) Ensure randomness in the namespace by including a hash prefix to key names.
- ( C ) Turn on server access logging.
- ( D ) Ensure that key names are sequential to enable pre-fetch.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>As of July 2017 Amazon S3 now provides increased performance to support at least 3,500 requests per second to add data and 5,500 requests per second to retrieve data, which can save significant processing time for no additional charge. Each S3 prefix can support these request rates, making it simple to increase performance significantly.That means you can now use logical or sequential naming patterns in S3 object naming without any performance implications.</p>
</details>

### Question 13: What is needed before you can enable cross-region replication on an Amazon Simple Storage Service (Amazon S3) bucket? (Choose 2 answers)

- ( A ) Enable versioning on the bucket.
- ( B ) Enable a lifecycle rule to migrate data to the second region.
- ( C ) Enable static website hosting.
- ( D ) Create an AWS Identity and Access Management (IAM) policy to allow Amazon S3 to replicate objects on your behalf.

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 14: Your company has 100TB of financial records that need to be stored for seven years by law. Experience has shown that any record more than one-year old is unlikely to be accessed. Which of the following storage plans meets these needs in the most cost efficient manner

- ( A ) Store the data on Amazon Elastic Block Store (Amazon EBS) volumes attached to t2.micro instances.
- ( B ) Store the data on Amazon Simple Storage Service (Amazon S3) with lifecycle policies that change the storage class to Amazon Glacier after one year and delete the object after seven years.
- ( C ) Store the data in Amazon DynamoDB and run daily script to delete data older than seven years.
- ( D ) Store the data in Amazon Elastic MapReduce (Amazon EMR).

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 15: Amazon Simple Storage Service (S3) bucket policies can restrict access to an Amazon S3 bucket and objects by which of the following? (Choose 3 answers)

- ( A ) Company name
- ( B ) IP address range
- ( C ) AWS account
- ( D ) Country of origin
- ( E ) Objects with a specific prefix

<details><summary>Answer</summary>
<p>B,C,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 16: Amazon Simple Storage Service (Amazon S3) is an eventually consistent storage system. For what kinds of operations is it possible to get stale data as a result of eventual consistency? (Choose 2 answers)

- ( A ) GET after PUT of a new object
- ( B ) GET or LIST after a DELETE
- ( C ) GET after overwrite PUT (PUT to an existing key)
- ( D ) DELETE after PUT of new object

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 17: What must be done to host a static website in an Amazon Simple Storage Service (Amazon S3) bucket? (Choose 3 answers)

- ( A ) Configure the bucket for static hosting and specify an index and error document.
- ( B ) Create a bucket with the same name as the website.
- ( C ) Enable File Transfer Protocol (FTP) on the bucket.
- ( D ) Make the objects in the bucket world-readable.
- ( E ) Enable HTTP on the bucket.

<details><summary>Answer</summary>
<p>A,D,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 18: You have valuable media files hosted on AWS and want them to be served only to authenticated users of your web application. You are concerned that your content could be stolen and distributed for free. How can you protect your content

- ( A ) Use static web hosting.
- ( B ) Generate pre-signed URLs for content in the web application.
- ( C ) Use AWS Identity and Access Management (IAM) policies to restrict access.
- ( D ) Use logging to track your content.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 19: Amazon Glacier is well-suited to data that is which of the following? (Choose 2 answers)

- ( A ) Is infrequently or rarely accessed
- ( B ) Must be immediately available when needed
- ( C ) Is available after a three- to five-hour restore period
- ( D ) Is frequently erased within 30 days

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>

### Question 20: Which statements about Amazon Glacier are true? (Choose 3 answers)

- ( A ) Amazon Glacier stores data in objects that live in archives.
- ( B ) Amazon Glacier archives are identified by user-specified key names.
- ( C ) Amazon Glacier archives take three to five hours to restore.
- ( D ) Amazon Glacier vaults can be locked.
- ( E ) Amazon Glacier can be used as a standalone service and as an Amazon S3 storage class.

<details><summary>Answer</summary>
<p>A,C,E</p>
</details>
<details><summary>Description</summary>
<p></p>
</details>
