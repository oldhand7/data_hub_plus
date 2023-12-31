---
title: "Assessment 03 - Vectors"
author: "Alessandro Corradini - Harvard Data Science Professional"
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

<br/>

#### **Numeric Vectors**
A vector is a series of values, all of the same type. They are the most basic data type in R and can hold numeric data, character data, or logical data. In R, you can create a vector with the combine function ```c()```. You place the vector elements separated by a comma between the parentheses. For example a numeric vector would look something like this:
```
cost <- c(50, 75, 90, 100, 150)
```
**Instructions**

Use the function ```c()``` to create a numeric vector with the average high temperatures in January for Beijing, Lagos, Paris, Rio de Janeiro, San Juan, and Toronto. The average high temperatures are ```35, 88, 42, 84, 81, and 30``` degrees Fahrenheit. Call the object ```temp```.

<RunBlock>

```r
# Here is an example creating a numeric vector named cost
cost <- c(50, 75, 90, 100, 150)

# Create a numeric vector to store the temperatures listed in the instructions into a vector named temp
# Make sure to follow the same order in the instructions
temp <- c(35, 88, 42, 84, 81, 30)
temp
```
</RunBlock>

<br/>

#### **Character vectors**
As in the previous question, we are going to create a vector. Only this time, we learn to create character vectors. The main difference is that these have to be written as strings and so the names are enclosed within double quotes.

A character vector would look something like this:
```
food <- c("pizza", "burgers", "salads", "cheese", "pasta")
```

**Instructions**

The temperatures we stored in ```temp``` are from the cities Beijing, Lagos, Paris, Rio de Janeiro, San Juan, and Toronto.

Create a vector with these city names and call the object ```city```.

```{r, include=TRUE}
# here is an example of how to create a character vector
food <- c("pizza", "burgers", "salads", "cheese", "pasta")

# Create a character vector called city to store the city names
# Make sure to follow the same order as in the instructions
city <- c('Beijing', 'Lagos', 'Paris', 'Rio de Janeiro', 'San Juan', 'Toronto')
```

<br/>

#### **Connecting Numeric and Character Vectors**
We have successfully assigned the temperatures as numeric values to ```temp``` and the city names as character values to ```city```. But can we associate the temperature to it's related city? Yes! We can do so using a code we already know - names. We assign ```names``` to the numeric values.

It would look like this:
```
cost <- c(50, 75, 90, 100, 150)
food <- c("pizza", "burgers", "salads", "cheese", "pasta")
names(cost) <- food
```

**Instructions**

Use the ```names``` function and the objects defined in the previous exercises to associate the temperature data with its corresponding city. (You can go back to the previous questions and copy the objects stored.) Note: to see what happened, after assigning the city names to the temp vector, try printing the ```temp``` vector to understand how the names are associated with elements of temp.

```{r, include=TRUE}
# Associate the cost values with its corresponding food item
cost <- c(50, 75, 90, 100, 150)
food <- c("pizza", "burgers", "salads", "cheese", "pasta")
names(cost) <- food

# You already wrote this code
temp <- c(35, 88, 42, 84, 81, 30)
city <- c("Beijing", "Lagos", "Paris", "Rio de Janeiro", "San Juan", "Toronto")

# Associate the temperature values with its corresponding city
names(temp) <- city
```

<br/>

#### **Subsetting vectors**
If we want to display only selected values from the object, R can help us do that easily.

For example, if we want to see the cost of the last 3 items in our food list, we would type:
```
cost[3:5]
```
Note here, that we could also type ```cost[c(3,4,5)]``` and get the same result. The : operator helps us condense the code and get consecutive values.

**Instructions**

We will learn to subset using several special operators.

Use the ```[``` and ```:``` operators to access the temperature of the first three cities in the list, which are already stored in ```temp```.

```{r, include=TRUE}
# cost of the last 3 items in our food list:
cost[3:5]

# temperatures of the first three cities in the list:
temp[1:3]
```

<br/>

#### **Subsetting vectors continued...**
In the previous question, we accessed the temperature for consecutive cities (1st three). But what if we want to access the temperatures for any 2 specific cities?

An example: To access the cost of ```pizza``` (1st) and ```pasta``` (5th food item) in our list, the code would be:
```
cost[c(1,5)]
```

**Instructions**

This time we will access our object using just the ```[``` operator. Use the ```[``` operator to access the temperature of Paris and San Juan already stored in the ```temp``` object.

```{r, include=TRUE}
# Access the cost of pizza and pasta from our food list 
cost[c(1,5)]

# Define temp
temp <- c(35, 88, 42, 84, 81, 30)
city <- c("Beijing", "Lagos", "Paris", "Rio de Janeiro", "San Juan", "Toronto")
names(temp) <- city

# Access the temperatures of Paris and San Juan
temp[c(3,5)]
```

<br/>

#### **Sequences**
The ```:``` operator helps us create sequences of numbers. For example, ```32:99``` would create a list of numbers from 32 to 99.

Then, if we want to know the length of this sequence, all we need to do use the length command.

**Instructions**

This time we will use just the ```:``` operator. Use the ```:``` operator to create a sequence of consecutive integers starting 12 and ending at 73 and save it in an object ```x```, then determine the length of object x.

```{r, include=TRUE}
# Create a vector m of integers that starts at 32 and ends at 99.
m <- 32:99

# Determine the length of object m.
length(m)

# Create a vector x of integers that starts 12 and ends at 73.
x <- seq(12,73)
# Determine the length of object x.
length(x)
```

<br/>

#### **Sequences continued...**
We can also create different types of sequences in R. For example, in ```seq(7, 49, 7)```, the first argument defines the start, and the second the end. The default is to go up in increments of 1, but a third argument lets us tell it by what interval.

**Instructions** 

We will learn how to use the ```seq()``` function in this question.

Create a vector containing all the positive odd numbers smaller than 100. The numbers should be in ascendint order.

```{r, include=TRUE}
# Create a vector with the multiples of 7, smaller than 50.
seq(7, 49, 7) 

# Create a vector containing all the positive odd numbers smaller than 100.
# The numbers should be in ascending order
seq(1,99,2)
```

<br/>

#### **Sequences and length**
The second argument of the function seq is actually a maximum, not necessarily the end. So if we type
```
seq(7, 50, 7)
```
we actually get the same vector of integers as if we type
```
seq(7, 49, 7)
```
This can be useful because sometimes all we want are sequential numbers that are smaller than some value.

Let's look at an example.

**Instructions**

Create a vector of numbers that starts at 6, does not go beyond 55, and adds numbers in increments of 4/7. So the first three numbers will be 6, 6+4/7, and 6+8/7. How many numbers does the list have? Use only one line of code to answer both questions.

```{r, include=TRUE}
# We can a vector with the multiples of 7, smaller than 50 like this 
seq(7, 49, 7) 

# But note that the second argument does not need to be last number.
# It simply determines the maximum value permitted.
# so the following line of code produces the same vector as seq(7, 49, 7)
seq(7, 50, 7)

# Create a sequence of numbers from 6 to 55, with 4/7 increments and determine its length
length(seq(6,55, 4/7))
```

<br/>

#### **Sequences of certain length**
The ```seq()``` function has another useful argument. The argument ```length.out```. This argument lets us generate sequences that are increasing by the same amount but are of the prespecified length.

For example, this line of code
```
x <- seq(0, 100, length.out = 5)
```
produces the numbers 0, 25, 50, 75, 100.

Let's create a vector and see what is the class of the object produced.

**Instructions**

Determine the class of a vector generated with ```seq``` using the length.out argument.
Specifically, what is the class of the following object ```a <- seq(1, 10, length.out = 100)```?
```{r, include=TRUE}

# Store the sequence in the object a
a <- seq(1, 10, length.out = 100)

# Determine the class of a
class(a)
```

<br/>

#### **Integers**
We have discussed the numeric class. We just saw that the seq function can generate objects of this class. For another example type
```
class(seq(1, 10, 0.5))
```
into the console and note that the ```class``` is numeric. R has another type of vector we have not described, the integer class. You can create an integer by adding the letter ```L``` after a whole number. If you type
```
class(3L)
```
in the console, you see this is an integer and not a numeric. For most practical purposes, integers and numerics are indistinguishable. For example 3, the integer, minus 3 the numeric is 0. To see this type this in the console
```
3L - 3
```
The main difference is that integers occupy less space in the computer memory, so for big computations using integers can have a substantial impact.

**Instructions**

Does this change depending on what we store in an object? What is the class of the following object ```a <- seq(1, 10)```?

```{r, include=TRUE}
# Store the sequence in the object a
a <- seq(1, 10)

# Determine the class of a
class(a)
```

<br/>

#### **Integers and Numerics**
Let's confirm that ```1L``` is an integer not a numeric.

**Instructions**

Confirm that the class of ```1``` is numeric and the class of ```1L``` is integer.

```{r, include=TRUE}
# Check the class of 1, assigned to the object a
class(1)

# Confirm the class of 1L is integer
class(1L)
```

<br/>

#### **Coercion**
The concept of coercion is a very important one. Watching the video, we learned that when an entry does not match what an R function is expecting, R tries to guess what we meant before throwing an error. This might get confusing at times.

As we've discussed in earlier questions, there are numeric and character vectors. The character vectors are placed in quotes and the numerics are not.

We can avoid issues with coercion in R by changing characters to numerics and vice-versa. This is known as typecasting. The code, ```as.numeric(x)``` helps us convert character strings to integers. There is an equivalent function that converts integers to strings, ```as.character(x)```.

Let's practice doing this!

**Instructions**

Define the following vector:
```x <- c(1, 3, 5,"a")```
Notice that ```x``` has been coerced into a character string.
Convert ```x``` to a vector of integers using the ```as.numeric()``` function.
```{r, include=TRUE}
# Define the vector x
x <- c(1, 3, 5,"a")

# Note that the x is character vector
x

# Typecast the vector to get an integer vector
# You will get a warning but that is ok
x <- as.numeric(x)
```