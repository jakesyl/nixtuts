---
layout: post

title: Hashcat Basics
category: security
author: 
  - wei2912

summary: Hashcat is a nifty tool for testing out passwords. In this tutorial, we'll give you a guide through the basics of Hashcat.
---

***Before we start, I'd like to warn you that attempting to break into any system is illegal. The content provided is meant only for educational purposes.***

Hashcat is a tool often used to test out passwords. Firstly, I'll explain how passwords are stored in a typical Linux system, then show how Hashcat is different from other password crackers.

## Downloading Hashcat

Let's obtain a copy of Hashcat first. In this tutorial, we'll be using the standard *[hashcat](http://hashcat.net/hashcat/)*.

Hashcat uses .7z extraction, so to extract it:

{% highlight bash %}
$ 7z x file.7z
{% endhighlight %}

Once it's extracted, *cd* into the directory. That's the end of the installation!

## Testing out Hashcat

Let's see if Hashcat works.

Once you're inside the Hashcat directory, execute the following command:

{% highlight bash %}
$ ./hashcat-cli64.bin -m 0 examples/A0.M0.hash examples/A0.M0.word
{% endhighlight %}

If using 32 bit:

{% highlight bash %}
$ ./hashcat-cli32.bin -m 0 examples/A0.M0.hash examples/A0.M0.word
{% endhighlight %}

You'll see a huge jumble of text pop up. The bottom part is what matters:

{% highlight bash %}
Input.Mode: Dict (examples/A0.M0.word)
Index.....: 1/1 (segment), 102 (words), 2769 (bytes)
Recovered.: 102/102 hashes, 1/1 salts
Speed/sec.: - plains, - words
Progress..: 102/102 (100.00%)
Running...: --:--:--:--
Estimated.: --:--:--:--
{% endhighlight %}

As seen here, we've successfully cracked all hashes. But how did we do it? Let's delve in further.

<!--more-->

### Flags

Looking at our first command, let's break it up into pieces.

{% highlight bash %}
-m 0
examples/A0.M0.hash
examples/A0.M0.word
{% endhighlight %}

The first part, *-m 0*, sets the hash to MD5; what *examples/A0.M0.hash* is hashed with.

The second part, *examples/A0.M0.hash*, is the hashfile and the third part, *examples/A0.M0.word*, is our dictionary.

## Let's try to crack a couple of passwords

Download [nixtuts-passwords.M0.hash](/files/HashcatBasics/nixtuts-passwords.M0.hash) and place it in your hashcat directory, underneath *passfiles/*.

This time, we will be using a rulesfile. Both the rulesfile and the dictionary are combined together to form a more extensive attack.

I'll give you a challenge to crack the passwords, after handing you a command.

{% highlight bash %}
$ ./hashcat-cli64.bin -m 0 -r ./rules/rulefile ./passfiles/nixtuts-passwords.M0.hash ./dict/dictfile
{% endhighlight %}

There're multiple choices for a rulefile, available in *rules/*. A rulefile manipulates a string from a dictfile to provide multiple combinations. For example, "password" may be l33tify into "passw0rd".

For a dictfile, try these:

* [500 worst passwords](http://downloads.skullsecurity.org/passwords/500-worst-passwords.txt.bz2)
* [370 Banned Twitter Passwords](http://downloads.skullsecurity.org/passwords/twitter-banned.txt.bz2)
* [RockYou](http://downloads.skullsecurity.org/passwords/rockyou.txt.bz2)

These provide text files containing strings which may be useful to you when cracking passwords. Remember to extract them first. I prefer placing these files in *dict/*.

### Want to know what passwords are inside without cracking them?

For lazy people, here's the list: [nixtuts-passwords](/files/HashcatBasics/nixtuts-passwords).

### Want to generate your own hashes?

This script generates unsalted MD5 hashes, which are insecure and should never be used to store passwords. The only reason why they are provided here is they are fast to compute.

{% highlight bash %}
#!/bin/bash

if [[ -z "$1" ]]
then
echo "ERROR: No input file specified."
fi

echo -n > ${1}.M0.hash
while read line
do
echo -n "$line" | md5sum | cut -f1 -d ' ' >> ${1}.M0.hash
done < "$1"

echo "Exported hashes to ${1}.M0.hash"
{% endhighlight %}

Provide the parameter of the filename and it will generate a new file with the hashes inside.

## Now that you've learnt how to crack passwords quickly...

Use them wisely to test passwords and enhance them/warn users, but *please do not use them for malicious purposes*.
