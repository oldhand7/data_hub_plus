---
title: "Assessment 05 - Vector Arithmetics"
author: "Alessandro Corradini - Harvard Data Science Professional"
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```
<br/>

#### **Vectorized operations**

Previously we created this data frame:


<RunBlock>
```{r, include=TRUE}
temp <- c(35, 88, 42, 84, 81, 30)
city <- c("Beijing", "Lagos", "Paris", "Rio de Janeiro", "San Juan", "Toronto")
city_temps <- data.frame(name = city, temperature = temp)
city_temps
```
</RunBlock>

**Instructions**

We are interested in specifying Celsius instead of Fahrenheit. Remember that to convert from Fahrenheit to Celsius we use $\ C=5/9×(F−32)$.

- Use vector arithmetics to convert temp to Celsius
- Create a data frame called city_temps with the city names and temperatures in Celsius.

```{r, include=TRUE}
# Assign city names to `city` 
city <- c("Beijing", "Lagos", "Paris", "Rio de Janeiro", "San Juan", "Toronto")

# Store temperature values in `temp`
temp <- c(35, 88, 42, 84, 81, 30)

# Convert temperature into Celsius and overwrite the original values of 'temp' with these Celsius values
temp <- (temp - 32)*5/9
# Create a data frame `city_temps` 
city_temps <- data.frame(name = city, temperature = temp)
```

<br/>

#### **Vectorized operations continued...**

We can use some of what we have learned to perform calculations that would otherwise be quite complicated. Let's see an example.

**Instructions**

What is the sum of the following equation: ```1 + 1/2^2 + 1/3^2 + ... + 1/100^2?``` Thanks to Euler we know it should be close to $\ π^2/6 $.

Define an object ```x``` that contains the numbers 1 through 100
Compute the sum ```1 + 1/2^2 + 1/3^2 + ... + 1/100^2```.

```{r, include=TRUE}
# Define an object `x` with the numbers 1 through 100
x <- seq(1,100)
# Compute the sum 
sum(1/x^2)
```

<br/>

#### **Vectorized operation continued...**

**Instructions**

- Compute the per 100,000 murder rate for each state and store it in the object ```murder_rate```.
- Then compute the average of the state murder rates for the US using the function ```mean```. What is this average?

```{r, include=TRUE}
# Load the data
library(dslabs)
data(murders)

# Store the per 100,000 murder rate for each state in murder_rate
murder_rate <- murders$tot/murders$population*100000
# Calculate the average murder rate in the US 
mean(murder_rate)
```