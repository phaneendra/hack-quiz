# EC2 and Compute

## Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Elastic Block Store (Amazon EBS)

### Question 1: Your web application needs four instances to support steady traffic nearly all of the time. On the last day of each month, the traffic triples. What is a cost-effective way to handle this traffic pattern

- ( A ) Run 12 Reserved Instances all of the time.
- ( B ) Run four On-Demand Instances constantly, then add eight more On-Demand Instances on the last day of each month.
- ( C ) Run four Reserved Instances constantly, then add eight On-Demand Instances on the last day of each month.
- ( D ) Run four On-Demand Instances constantly, then add eight Reserved Instances on the last day of each month.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>Reserved Instances provide cost savings when you can commit to running instances full time, such as to handle the base traffic. On-Demand Instances provide the flexibility to handle traffic spikes, such as on the last day of the month.</p>
</details>

### Question 2: Your order-processing application processes orders extracted from a queue with two Reserved Instances processing 10 orders/minute. If an order fails during processing, then it is returned to the queue without penalty. Due to a weekend sale, the queues have several hundred orders backed up. While the backup is not catastrophic, you would like to drain it so that customers get their confirmation emails faster. What is a cost-effective way to drain the queue for orders

- ( A ) Create more queues.
- ( B ) Deploy additional Spot Instances to assist in processing the orders.
- ( C ) Deploy additional Reserved Instances to assist in processing the orders.
- ( D ) Deploy additional On-Demand Instances to assist in processing the orders.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>Spot Instances are a very cost-effective way to address temporary compute needs that are not urgent and are tolerant of interruption. That’s exactly the workload described here. Reserved Instances are inappropriate for temporary workloads. On-Demand Instances are good for temporary workloads, but don’t offer the cost savings of Spot Instances. Adding more queues is a non-responsive answer as it would not address the problem.</p>
</details>

### Question 3: Which of the following must be specified when launching a new Amazon Elastic Compute Cloud (Amazon EC2) Windows instance? (Choose 2 answers)

- ( A ) The Amazon EC2 instance ID
- ( B ) Password for the administrator account
- ( C ) Amazon EC2 instance type
- ( D ) Amazon Machine Image (AMI)

<details><summary>Answer</summary>
<p>C,D</p>
</details>
<details><summary>Description</summary>
<p>The Amazon EC2 instance ID will be assigned by AWS as part of the launch process. The administrator password is assigned by AWS and encrypted via the public key. The instance type defines the virtual hardware and the AMI defines the initial software state. You must specify both upon launch.</p>
</details>

### Question 4. You have purchased an m3.xlarge Linux Reserved instance in us-east-1a. In which ways can you modify this reservation? (Choose 2 answers)

- ( A ) Change it into two m3.large instances.
- ( B ) Change it to a Windows instance.
- ( C ) Move it to us-east-1b.
- ( D ) Change it to an m4.xlarge.

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p>You can change the instance type only within the same instance type family, or you can change the Availability Zone. You cannot change the operating system nor the instance type family.</p>
</details>

### Question 5. Your instance is associated with two security groups. The first allows Remote Desktop Protocol (RDP) access over port 3389 from Classless Inter-Domain Routing (CIDR) block 72.14.0.0/16. The second allows HTTP access over port 80 from CIDR block 0.0.0.0/0. What traffic can reach your instance

- ( A ) RDP and HTTP access from CIDR block 0.0.0.0/0
- ( B ) No traffic is allowed.
- ( C ) RDP and HTTP traffic from 72.14.0.0/16
- ( D ) RDP traffic over port 3389 from 72.14.0.0/16 and HTTP traffic over port 80 from 0.0.0.0/0

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>When there are multiple security groups associated with an instance, all the rules are aggregated.</p>
</details>

### Question 6. Which of the following are features of enhanced networking? (Choose 3 answers)

- ( A ) More Packets Per Second (PPS)
- ( B ) Lower latency
- ( C ) Multiple network interfaces
- ( D ) Border Gateway Protocol (BGP) routing
- ( E ) Less jitter

<details><summary>Answer</summary>
<p>A,B,E</p>
</details>
<details><summary>Description</summary>
<p>These are the benefits of enhanced networking.</p>
</details>

### Question 7. You are creating a High-Performance Computing (HPC) cluster and need very low latency and high bandwidth between instances. What combination of the following will allow this? (Choose 3 answers)

- ( A ) Use an instance type with 10 Gbps network performance.
- ( B ) Put the instances in a placement group.
- ( C ) Use Dedicated Instances.
- ( D ) Enable enhanced networking on the instances.
- ( E ) Use Reserved Instances.

<details><summary>Answer</summary>
<p>A,B,D</p>
</details>
<details><summary>Description</summary>
<p>The other answers have nothing to do with networking.</p>
</details>

### Question 8. Which Amazon Elastic Compute Cloud (Amazon EC2) feature ensures that your instances will not share a physical host with instances from any other AWS customer

- ( A ) Amazon Virtual Private Cloud (VPC)
- ( B ) Placement groups
- ( C ) Dedicated Instances
- ( D ) Reserved Instances

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>Dedicated Instances will not share hosts with other accounts.</p>
</details>

### Question 9. Which of the following are true of instance stores? (Choose 2 answers)

- ( A ) Automatic backups
- ( B ) Data is lost when the instance stops.
- ( C ) Very high IOPS
- ( D ) Charge is based on the total amount of storage provisioned.

<details><summary>Answer</summary>
<p>B,C</p>
</details>
<details><summary>Description</summary>
<p>Instance stores are low-durability, high-IOPS storage that is included for free with the hourly cost of an instance.</p>
</details>

### Question 10. Which of the following are features of Amazon Elastic Block Store (Amazon EBS)? (Choose 2 answers)

- ( A ) Data stored on Amazon EBS is automatically replicated within an Availability Zone.
- ( B ) Amazon EBS data is automatically backed up to tape.
- ( C ) Amazon EBS volumes can be encrypted transparently to workloads on the attached instance.
- ( D ) Data on an Amazon EBS volume is lost when the attached instance is stopped.

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p>There are no tapes in the AWS infrastructure. Amazon EBS volumes persist when the instance is stopped. The data is automatically replicated within an Availability Zone. Amazon EBS volumes can be encrypted upon creation and used by an instance in the same manner as if they were not encrypted.</p>
</details>

### Question 11. You need to take a snapshot of an Amazon Elastic Block Store (Amazon EBS) volume. How long will the volume be unavailable

- ( A ) It depends on the provisioned size of the volume.
- ( B ) The volume will be available immediately.
- ( C ) It depends on the amount of data stored on the volume.
- ( D ) It depends on whether the attached instance is an Amazon EBS-optimized instance.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>There is no delay in processing when commencing a snapshot.</p>
</details>

### Question 12. You are restoring an Amazon Elastic Block Store (Amazon EBS) volume from a snapshot. How long will it be before the data is available

- ( A ) It depends on the provisioned size of the volume.
- ( B ) The data will be available immediately.
- ( C ) It depends on the amount of data stored on the volume.
- ( D ) It depends on whether the attached instance is an Amazon EBS-optimized instance.

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>The volume is created immediately but the data is loaded lazily. This means that the volume can be accessed upon creation, and if the data being requested has not yet been restored, it will be restored upon first request.</p>
</details>

### Question 13. You have a workload that requires 15,000 consistent IOPS for data that must be durable. What combination of the following steps do you need? (Choose 2 answers)

- ( A ) Use an Amazon Elastic Block Store (Amazon EBS)-optimized instance.
- ( B ) Use an instance store.
- ( C ) Use a Provisioned IOPS SSD volume.
- ( D ) Use a magnetic volume.

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p>B and D are incorrect because an instance store will not be durable and a magnetic volume offers an average of 100 IOPS. Amazon EBS-optimized instances reserve network bandwidth on the instance for IO, and Provisioned IOPS SSD volumes provide the highest consistent IOPS.</p>
</details>

### Question 14. Which of the following can be accomplished through bootstrapping

- ( A ) Install the most current security updates.
- ( B ) Install the current version of the application.
- ( C ) Configure Operating System (OS) services.
- ( D ) All of the above.

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>Bootstrapping runs the provided script, so anything you can accomplish in a script you can accomplish during bootstrapping.</p>
</details>

### Question 15. How can you connect to a new Linux instance using SSH

- ( A ) Decrypt the root password.
- ( B ) Using a certificate
- ( C ) Using the private half of the instance’s key pair
- ( D ) Using Multi-Factor Authentication (MFA)

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>The public half of the key pair is stored on the instance, and the private half can then
be used to connect via SSH.</p>
</details>

### Question 16. VM Import/Export can import existing virtual machines as: (Choose 2 answers)

- ( A ) Amazon Elastic Block Store (Amazon EBS) volumes
- ( B ) Amazon Elastic Compute Cloud (Amazon EC2) instances
- ( C ) Amazon Machine Images (AMIs)
- ( D ) Security groups

<details><summary>Answer</summary>
<p>B,C</p>
</details>
<details><summary>Description</summary>
<p>These are the possible outputs of VM Import/Export.</p>
</details>

### Question 17. Which of the following can be used to address an Amazon Elastic Compute Cloud (Amazon EC2) instance over the web? (Choose 2 answers)

- ( A ) Windows machine name
- ( B ) Public DNS name
- ( C ) Amazon EC2 instance ID
- ( D ) Elastic IP address

<details><summary>Answer</summary>
<p>B,D</p>
</details>
<details><summary>Description</summary>
<p>Neither the Windows machine name nor the Amazon EC2 instance ID can be resolved into an IP address to access the instance.</p>
</details>

### Question 18. Using the correctly decrypted Administrator password and RDP, you cannot log in to a Windows instance you just launched. Which of the following is a possible reason

- ( A ) There is no security group rule that allows RDP access over port 3389 from your IP address.
- ( B ) The instance is a Reserved Instance.
- ( C ) The instance is not using enhanced networking.
- ( D ) The instance is not an Amazon EBS-optimized instance.

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>None of the other options will have any effect on the ability to connect.</p>
</details>

### Question 19. You have a workload that requires 1 TB of durable block storage at 1,500 IOPS during normal use. Every night there is an Extract, Transform, Load (ETL) task that requires 3,000 IOPS for 15 minutes. What is the most appropriate volume type for this workload

- ( A ) Use a Provisioned IOPS SSD volume at 3,000 IOPS.
- ( B ) Use an instance store.
- ( C ) Use a general-purpose SSD volume.
- ( D ) Use a magnetic volume.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>A short period of heavy traffic is exactly the use case for the bursting nature of general-purpose SSD volumes—the rest of the day is more than enough time to build up enough IOPS credits to handle the nightly task. Instance stores are not durable, magnetic volumes cannot provide enough IOPS, and to set up a Provisioned IOPS SSD volume to handle the peak would mean spending money for more IOPS than you need.</p>
</details>

### Question 20. How are you billed for elastic IP addresses

- ( A ) Hourly when they are associated with an instance
- ( B ) Hourly when they are not associated with an instance
- ( C ) Based on the data that flows through them
- ( D ) Based on the instance type to which they are attached

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>There is a very small hourly charge for allocated elastic IP addresses that are not
associated with an instance.</p>
</details>
