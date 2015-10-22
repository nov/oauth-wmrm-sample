# Setup

## Pre-requirements

Expecting your Mac has ruby 2.0 or above.

```
# install bundler gem
gem install bundler

# install pow
curl get.pow.cx | sh

# clone repo & install required gems using bundler
git clone git@github.com:nov/oauth-wmrm-sample.git
cd oauth-wmrm-sample
bundle install
```

## Start OP & RP

### Simple Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/simple/as simple-as # for authenticated/unauthenticated window
ln -s <path-to-wmrm-sample>/simple/rp simple-rp # for main window
```

Then open http://simple-rp.dev

### Relay Mode

```
cd ~/.pow
ln -s <path-to-wmrm-sample>/relay/as relay-as # for authenticated/unauthenticated window
ln -s <path-to-wmrm-sample>/relay/rs relay-rs # for message target window
ln -s <path-to-wmrm-sample>/relay/rp relay-rp # for main window
```

Then open http://relay-rp.dev