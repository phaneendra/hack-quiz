# Amazon Virtual Private Cloud (Amazon VPC)

## The Amazon Virtual Private Cloud (Amazon VPC) is a custom-defined virtual network within the AWS Cloud

### Question 1: What is the minimum size subnet that you can have in an Amazon VPC

- ( A ) /24
- ( B ) /26
- ( C ) /28
- ( D ) /30

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>The minimum size subnet that you can have in an Amazon VPC is /28.</p>
</details>

### Question 2: You are a solutions architect working for a large travel company that is migrating its existing server estate to AWS. You have recommended that they use a custom Amazon VPC, and they have agreed to proceed. They will need a public subnet for their web servers and a private subnet in which to place their databases. They also require that the web servers and database servers be highly available and that there be a minimum of two web servers and two database servers each. How many subnets should you have to maintain high availability

- ( A ) 2
- ( B ) 3
- ( C ) 4
- ( D ) 1

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>You need two public subnets (one for each Availability Zone) and two private subnets (one for each Availability Zone). Therefore, you need four subnets.</p>
</details>

### Question 3: Which of the following is an optional security control that can be applied at the subnet layer of a VPC

- ( A ) Network ACL
- ( B ) Security Group
- ( C ) Firewall
- ( D ) Web application firewall

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>Network ACLs are associated to a VPC subnet to control traffic flow.</p>
</details>

### Question 4: What is the maximum size IP address range that you can have in an Amazon VPC

- ( A ) /16
- ( B ) /24
- ( C ) /28
- ( D ) /30

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>The maximum size subnet that you can have in a VPC is /16.</p>
</details>

### Question 5: You create a new subnet and then add a route to your route table that routes traffic out from that subnet to the Internet using an IGW. What type of subnet have you created

- ( A ) An internal subnet
- ( B ) A private subnet
- ( C ) An external subnet
- ( D ) A public subnet

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>By creating a route out to the Internet using an IGW, you have made this subnet public.</p>
</details>

### Question 6: What happens when you create a new Amazon VPC

- ( A ) A main route table is created by default.
- ( B ) Three subnets are created by default—one for each Availability Zone.
- ( C ) Three subnets are created by default in one Availability Zone.
- ( D ) An IGW is created by default.

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>When you create an Amazon VPC, a route table is created by default. You must
manually create subnets and an IGW.</p>
</details>

### Question 7: You create a new VPC in US-East-1 and provision three subnets inside this Amazon VPC. Which of the following statements is true

- ( A ) By default, these subnets will not be able to communicate with each other; you will need to create routes.
- ( B ) All subnets are public by default.
- ( C ) All subnets will be able to communicate with each other by default.
- ( D ) Each subnet will have identical CIDR blocks.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>When you provision an Amazon VPC, all subnets can communicate with each other by
default.</p>
</details>

### Question 8: How many IGWs can you attach to an Amazon VPC at any one time

- ( A ) 1
- ( B ) 2
- ( C ) 3
- ( D ) 4

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>You may only have one IGW for each Amazon VPC.</p>
</details>

### Question 9: What aspect of an Amazon VPC is stateful

- ( A ) Network ACLs
- ( B ) Security groups
- ( C ) Amazon DynamoDB
- ( D ) Amazon S3

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>Security groups are stateful, whereas network ACLs are stateless.</p>
</details>

### Question 10: You have created a custom Amazon VPC with both private and public subnets. You have created a NAT instance and deployed this instance to a public subnet. You have attached an EIP address and added your NAT to the route table. Unfortunately, instances in your private subnet still cannot access the Internet. What may be the cause of this

- ( A ) Your NAT is in a public subnet, but it needs to be in a private subnet.
- ( B ) Your NAT should be behind an Elastic Load Balancer.
- ( C ) You should disable source/destination checks on the NAT.
- ( D ) Your NAT has been deployed on a Windows instance, but your other instances are Linux. You should redeploy the NAT onto a Linux instance.

<details><summary>Answer</summary>
<p>C</p>
</details>
<details><summary>Description</summary>
<p>You should disable source/destination checks on the NAT.</p>
</details>

### Question 11: Which of the following will occur when an Amazon Elastic Block Store (Amazon EBS)- backed Amazon EC2 instance in an Amazon VPC with an associated EIP is stopped and started? (Choose 2 answers)

- ( A ) The EIP will be dissociated from the instance.
- ( B ) All data on instance-store devices will be lost.
- ( C ) All data on Amazon EBS devices will be lost.
- ( D ) The ENI is detached.
- ( E ) The underlying host for the instance is changed.

<details><summary>Answer</summary>
<p>B,E</p>
</details>
<details><summary>Description</summary>
<p>In the EC2-Classic network, the EIP will be disassociated with the instance; in the EC2-VPC network, the EIP remains associated with the instance. Regardless of the underlying network, a stop/start of an Amazon EBS-backed Amazon EC2 instance always changes the host computer.</p>
</details>

### Question 12: How many VPC Peering connections are required for four VPCs located within the same AWS region to be able to send traffic to each of the others

- ( A ) 3
- ( B ) 4
- ( C ) 5
- ( D ) 6

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>Six VPC Peering connections are needed for each of the four VPCs to send traffic to the other.</p>
</details>

### Question 13: Which of the following AWS resources would you use in order for an EC2-VPC instance to resolve DNS names outside of AWS

- ( A ) A VPC peering connection
- ( B ) A DHCP option set
- ( C ) A routing rule
- ( D ) An IGW

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>A DHCP option set allows customers to define DNS servers for DNS name resolution, establish domain names for instances within an Amazon VPC, define NTP servers, and define the NetBIOS name servers.</p>
</details>

### Question 14: Which of the following is the Amazon side of an Amazon VPN connection

- ( A ) An EIP
- ( B ) A CGW
- ( C ) An IGW
- ( D ) A VPG

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>A CGW is the customer side of a VPN connection, and an IGW connects a network to the Internet. A VPG is the Amazon side of a VPN connection.</p>
</details>

### Question 15: What is the default limit for the number of Amazon VPCs that a customer may have in a region

- ( A ) 5
- ( B ) 6
- ( C ) 7
- ( D ) There is no default maximum number of VPCs within a region.

<details><summary>Answer</summary>
<p>A</p>
</details>
<details><summary>Description</summary>
<p>The default limit for the number of Amazon VPCs that a customer may have in a region is 5.</p>
</details>

### Question 16: You are responsible for your company’s AWS resources, and you notice a significant amount of traffic from an IP address in a foreign country in which your company does not have customers. Further investigation of the traffic indicates the source of the traffic is scanning for open ports on your EC2-VPC instances. Which one of the following resources can deny the traffic from reaching the instances

- ( A ) Security group
- ( B ) Network ACL
- ( C ) NAT instance
- ( D ) An Amazon VPC endpoint

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>Network ACL rules can deny traffic.</p>
</details>

### Question 17: Which of the following is the security protocol supported by Amazon VPC

- ( A ) SSH
- ( B ) Advanced Encryption Standard (AES)
- ( C ) Point-to-Point Tunneling Protocol (PPTP)
- ( D ) IPsec

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>IPsec is the security protocol supported by Amazon VPC.</p>
</details>

### Question 18: Which of the following Amazon VPC resources would you use in order for EC2-VPC instances to send traffic directly to Amazon S3

- ( A ) Amazon S3 gateway
- ( B ) IGW
- ( C ) CGW
- ( D ) VPC endpoint

<details><summary>Answer</summary>
<p>D</p>
</details>
<details><summary>Description</summary>
<p>An Amazon VPC endpoint enables you to create a private connection between your Amazon VPC and another AWS service without requiring access over the Internet or through a NAT device, VPN connection, or AWS Direct Connect.</p>
</details>

### Question 19: What properties of an Amazon VPC must be specified at the time of creation? (Choose 2 answers)

- ( A ) The CIDR block representing the IP address range
- ( B ) One or more subnets for the Amazon VPC
- ( C ) The region for the Amazon VPC
- ( D ) Amazon VPC Peering relationships

<details><summary>Answer</summary>
<p>A,C</p>
</details>
<details><summary>Description</summary>
<p>The CIDR block is specified upon creation and cannot be changed. An Amazon VPC is associated with exactly one region which must be specified upon creation. You can add a subnet to an Amazon VPC any time after it has been created, provided its address range falls within the Amazon VPC CIDR block and does not overlap with the address range of any existing CIDR block. You can set up peering relationships between Amazon VPCs after they have been created.</p>
</details>

### Question 20: Which Amazon VPC feature allows you to create a dual-homed instance

- ( A ) EIP address
- ( B ) ENI
- ( C ) Security groups
- ( D ) CGW

<details><summary>Answer</summary>
<p>B</p>
</details>
<details><summary>Description</summary>
<p>Attaching an ENI associated with a different subnet to an instance can make the instance dual-homed.</p>
</details>
