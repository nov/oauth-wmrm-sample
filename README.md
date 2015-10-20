# Setup

## Pre-requirements

* ruby
* bundler
* [pow](http://pow.cx)

## Start OP & RP

```
git clone git@github.com:nov/oauth-wmrm-sample.git
cd oauth-wmrm-sample
bundle install
cd ~/.pow
ln -s <path-to-wmrm-sample>/op wmrm-op
ln -s <path-to-wmrm-sample>/rp wmrm-rp
```

Then http://wmrm-op.dev and http://wmrm-rp.dev would be accessible.