# dirtmap.org

More info about this project at [dirtmap.org](http://dirtmap.org)

This github repository is a place to keep up with the different visualization components of the project, made using d3. 

Some of what is here: 

## Species makeup of each sample

These diagrams represents a single sample of dirt, and shows the proportion of different bacteria species that were found inside it (by the machines owned and operated by the company that did the sequencing & data processing):

* Sample 1: [./ClusteredSpecies.html?s=1](./ClusteredSpecies.html?s=1)
* Sample 2: [./ClusteredSpecies.html?s=2](./ClusteredSpecies.html?s=2)
* Sample 3: [./ClusteredSpecies.html?s=3](./ClusteredSpecies.html?s=3)
* ... etc. there were 62 samples that made it through the mail

## Locations where certain bacteria were found

These diagrams are quite similar to the above, but flip the axes (sortof)... so each diagram represents one GENUS of bacteria (as identified by the Illumina sequencing process & USEARCH algorithms run by someone else). Then, the circles represent a sample site, so you can see if a particular bacteria was found in many places or just a few places. 

* Bacteria // Actinobacteria // Actinobacteria (class) // Actinomycetales // Frankiaceae // Frankia : A genus found in almost all of our samples, but in low prevalaence (.2-5% of any given sample) [./ClusteredSamples-Genus.html?b=16](./ClusteredSamples-Genus.html?b=16)
* Bacteria // Proteobacteria // Betaproteobacteria // Burkholderiales // Oxalobacteraceae // Unknown : All the bacteria identified as part of th eOxalobacteraceae Family, but of unknown genus (so this one is kind of cheating, because its clustering lots of things together). In any case, these unknowns made up over 50% of some of the samples: [./ClusteredSamples-Genus.html?b=325](./ClusteredSamples-Genus.html?b=325)
* Bacteria // Proteobacteria // Alphaproteobacteria // Rhizobiales // Bradyrhizobiaceae // Bradyrhizobium [./ClusteredSamples-Genus.html?b=220](./ClusteredSamples-Genus.html?b=220)
* Bacteria // Proteobacteria // Gammaproteobacteria // Pseudomonadales // Moraxellaceae // Acinetobacter : apparently very prevalent in samples from water areas, and just one other place [./http://el-ee.github.io/dirt-map/ClusteredSamples-Genus.html?b=399](./http://el-ee.github.io/dirt-map/ClusteredSamples-Genus.html?b=399)
