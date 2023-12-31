---
title: "Assessment 02 - Data Types"
author: "Alessandro Corradini - Harvard Data Science Professional"
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

### **str**
We're going to be using the following dataset for this module. Run this code in the console.

<TerminalBlock>
library(dslabs)
data(murders)
</TerminalBlock>
Next, use the function ```str``` to examine the structure of the ```murders``` object. We can see that this object is a data frame with 51 rows and five columns.

Which of the following best describes the variables represented in this data frame:

**Possible Answers**

- The 51 states
- The murder rates for all 50 states and DC
- The state name, the abbreviation of the state name, the state's region, - and the state's population and the total number of murders for 2010. [X]
- str shows no relevant information

<br/>

### **Variable names**
In the previous question, we saw the different variables that are a part of this dataset from the output of the ```str()``` function. The function ```names()``` is specifically designed to extract the column names from a data frame.

**Instructions**

For this question, we will use the ```names()``` function to extract the column names of the murders data frame.

- What are the column names used by the murders data frame for the five variables?


```{r, include=TRUE}
# Load package and data

library(dslabs)
data(murders)

# Use the function names to extract the variable names 
names(murders)
```

<br/>

### **Examining Variables**
In this module we have learned that every variable has a class. For example, the class can be a character, numeric or logical. The function ```class()``` can be used to determine the class of an object.

Here we are going to determine the class of one of the variables in the murders data frame. To extract variables from a data frame we use ```$```, referred to as the accessor.

In the editor we show an example of how to do this. Let`s try it out for ourselves.

**Instructions**

Use the accessor ```$``` to extract the state abbreviations and assign them to the object a. What is the class of this object?


```{r, include=TRUE}
# To access the population variable from the murders dataset use this code:
p <- murders$population 

# To determine the class of object `p` we use this code:
class(p)

# Use the accessor to extract state abbreviations and assign it to a
a <- murders$abb
# Determine the class of a
class(a)
```
<br/>

### **Multiple ways to access variables**
An important lesson you should learn early on is that there are multiple ways of doing things in R. For example, to generate the first five integers we note that 1:5, and ```seq(1,5)``` return the same result.

There are also other ways to variables from a data frame. For example we can use the square brackets ```[[``` instead of the accessor ```$```. Example code is included in the editor.

Now, if you instead try to access a columns with just one bracket
```
murders["population"]
```
R returns a subset of the original data frame containing just this column. This new object will be of class data.frame rather than a vector. To access the column itself you need to use either the ```$``` accessor or the double square brackets ```[[```.

This is an examaple of how R can be a bit idiosyncratic sometimes. It is very common to find it confusing at first.

**Instructions**

Use the square brackets ```[[``` to extract the state abbreviations and assign them to the object ```b```. Then use the identical function to determine if a, as defined in the previous exercises, and b are the same.
```{r, include=TRUE}
# We extract the population like this:
p <- murders$population

# This is how we do the same with the square brackets:
o <- murders[["population"]] 

# We can confirm these two are the same
identical(o, p)

# Use square brackets to extract `abb` from `murders` and assign it to b
b <- murders[['abb']]
# Check if `a` and `b` are identical 
identical(a,b)
```

<br/>

### **Factors**
Using the ```str()``` command, we saw that the region column stores a factor. You can corroborate this by using the class command on the region column.

The function levels shows us the categories for the factor.

**Instructions**

For this question we will combine two functions, in a nested way, to determine the number of unique categories. Use the functions levels and length to determine the number of regions defined by this dataset and contained in murders$region.
```{r, include=TRUE}
# We can see the class of the region variable using class
class(murders$region)

# Determine the number of regions included in this variable 
length(levels(murders$region))
```

<br/>

### **Tables**
The function table takes a vector as input and returns the frequency of each unique element in the vector.

**Instructions**

We will use the table function to answer this question.

Use the table function in one line of code to create a table showing the number of states per region.
```{r, include=TRUE}
# Here is an example of what the table function does
x <- c("a", "a", "b", "b", "b", "c")
table(x)

# Write one line of code to show the number of states per region
table(murders$region)
```