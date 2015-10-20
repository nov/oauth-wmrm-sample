# Setup

## Pre-requirements

* ruby
* bundler
* [pow](http://pow.cx)

Prepare above environments, then clone repo and bundle required gems.

```
git clone git@github.com:nov/oauth-wmrm-sample.git
cd oauth-wmrm-sample
bundle install
```

## Start OP & RP

### Simple Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/simple/op wmrm-op
ln -s <path-to-wmrm-sample>/simple/rp wmrm-rp
```

Then http://wmrm-op.dev and http://wmrm-rp.dev would be accessible.

### Relay Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/relay/op wmrm-op
ln -s <path-to-wmrm-sample>/relay/rp wmrm-rp
```

Then http://wmrm-op.dev and http://wmrm-rp.dev would be accessible.